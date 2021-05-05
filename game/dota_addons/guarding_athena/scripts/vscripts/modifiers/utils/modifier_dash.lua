---@class 冲刺
modifier_dash = eom_modifier({
	IsHidden = true,
	IsDebuff = false,
	IsPurgable = false,
	IsPurgeException = false,
	IsStunDebuff = false,
	AllowIllusionDuplicate = false,
	LuaModifierType = LUA_MODIFIER_MOTION_BOTH
})

local public = modifier_dash

function public:OnCreated(params)
	if IsServer() then
		local hParent = self:GetParent()
		-- 传入参数
		self.vDirection = (StringToVector(params.vDirection)):Normalized()
		self.knockback_duration = params.knockback_duration
		self.knockback_distance = params.knockback_distance
		self.knockback_height = params.knockback_height
		self.bBlock = params.bBlock
		-- 计算参数
		self.vStart = hParent:GetAbsOrigin()
		self.vSpeed = self.knockback_distance / self.knockback_duration
		self.flFactor = math.sqrt(self.knockback_height)

		local a = math.sqrt(self.knockback_height)
		self.funcGetJmepHeight = function(x)
			x = (x / self.knockback_distance) * a * 2 - a
			return -(x ^ 2) + self.knockback_height
		end
		if not self:ApplyVerticalMotionController() or not self:ApplyHorizontalMotionController() then
			self:Destroy()
		end
		hParent.GetDashDirection = function(hParent)
			return self.vDirection
		end
		hParent.GetDashDistance = function(hParent)
			return self.knockback_distance
		end
		hParent.GetDashDuration = function(hParent)
			return self.knockback_duration
		end
	end
end
function public:OnDestroy()
	if IsServer() then
		local hParent = self:GetParent()
		hParent:RemoveHorizontalMotionController(self)
		hParent:RemoveVerticalMotionController(self)
		if self.callback then
			self.callback()
		end
		FireModifierEvent({
			event_name = MODIFIER_EVENT_ON_DASH_END,
			unit = hParent
		})
	end
end
function public:OnHorizontalMotionInterrupted()
	self:Destroy()
end
function public:OnVerticalMotionInterrupted()
	self:Destroy()
end
function public:UpdateHorizontalMotion(hParent, dt)
	local vPosition = hParent:GetAbsOrigin() + self.vDirection * self.vSpeed * dt
	if self.bBlock and not GridNav:CanFindPath(hParent:GetAbsOrigin(), vPosition) then
		return
	end
	hParent:SetAbsOrigin(vPosition)
end
function public:UpdateVerticalMotion(hParent, dt)
	local flDistance = (hParent:GetAbsOrigin() - self.vStart):Length2D()
	local flHeight = self.vStart.z + self.funcGetJmepHeight(flDistance)
	local vPosition = hParent:GetAbsOrigin()
	hParent:SetAbsOrigin(Vector(vPosition.x, vPosition.y, flHeight))
end
-- function public:DeclareFunctions()
-- 	return {
-- 		MODIFIER_PROPERTY_OVERRIDE_ANIMATION,
-- 		MODIFIER_PROPERTY_TRANSLATE_ACTIVITY_MODIFIERS
-- 	}
-- end
-- function public:GetOverrideAnimation(params)
-- 	return ACT_DOTA_FLAIL
-- end
-- function public:GetActivityTranslationModifiers()
-- 	return "forcestaff_friendly"
-- end
-- function public:ECheckState()
-- 	return {
-- 		[MODIFIER_STATE_STUNNED] = true,
-- 		[MODIFIER_STATE_DODGE_PROJECTILE] = true,
-- 		[MODIFIER_STATE_DODGE_TRAP] = true
-- 	}
-- end