juggernaut_1_juggernaut_01 = class({})
function juggernaut_1_juggernaut_01:GetAOERadius()
	return self:GetSpecialValueFor("radius")
end
function juggernaut_1_juggernaut_01:OnSpellStart()
	local hCaster = self:GetCaster()
	local vStart = hCaster:GetAbsOrigin()
	-- local vPosition = self:GetCursorPosition()
	local vPosition = vStart
	local duration = self:GetSpecialValueFor("duration")
	hCaster:AddNewModifier(hCaster, self, "modifier_juggernaut_1_juggernaut_01", { vCenter = vPosition })
	local hUnit = hCaster:GetMaskGhost()
	if hUnit then
		hUnit:AddNewModifier(hUnit, self, "modifier_juggernaut_1_juggernaut_01", { vCenter = hUnit:GetAbsOrigin() })
	end
end
---------------------------------------------------------------------
--Modifiers
modifier_juggernaut_1_juggernaut_01 = eom_modifier({
	Name = "modifier_juggernaut_1_juggernaut_01",
	IsHidden = true,
	IsDebuff = false,
	IsPurgable = false,
	IsPurgeException = false,
	IsStunDebuff = false,
	AllowIllusionDuplicate = false,
})
function modifier_juggernaut_1_juggernaut_01:OnCreated(params)
	self.radius = self:GetAbilitySpecialValueFor("radius")
	self.interval = self:GetAbilitySpecialValueFor("interval")
	if IsServer() then
		---@type CDOTA_BaseNPC
		local hParent = self:GetParent()
		-- hParent:AddNoDraw()
		self.vCenter = StringToVector(params.vCenter)
		self.vInitDirection = self.vCenter + RandomVector(self.radius)
		self.tPosition = {
			RotatePosition(self.vCenter, QAngle(0, 0, 0), self.vInitDirection),
			RotatePosition(self.vCenter, QAngle(0, 144, 0), self.vInitDirection),
			RotatePosition(self.vCenter, QAngle(0, -72, 0), self.vInitDirection),
			RotatePosition(self.vCenter, QAngle(0, 72, 0), self.vInitDirection),
			RotatePosition(self.vCenter, QAngle(0, 216, 0), self.vInitDirection),
		}
		self.count = 1
		self:StartIntervalThink(self.interval)
		self:OnIntervalThink()

		local iParticleID = ParticleManager:CreateParticle("particles/units/heroes/hero_juggernaut/juggernaut_1_juggernaut_01_circle.vpcf", PATTACH_CUSTOMORIGIN, nil)
		ParticleManager:SetParticleControl(iParticleID, 0, self.vCenter)
		ParticleManager:SetParticleControl(iParticleID, 1, Vector(self.radius, 1, 1))
		self:AddParticle(iParticleID, false, false, -1, false, false)
		hParent:StartGesture(ACT_DOTA_OVERRIDE_ABILITY_4)
	end
end
function modifier_juggernaut_1_juggernaut_01:OnDestroy()
	if IsServer() then
		---@type CDOTA_BaseNPC
		local hParent = self:GetParent()
		-- hParent:RemoveNoDraw()
		FindClearSpaceForUnit(hParent, self.vCenter, false)
		-- hParent:EmitSound("Hero_Juggernaut.ArcanaTrigger")
		hParent:RemoveGesture(ACT_DOTA_OVERRIDE_ABILITY_4)
		ExecuteOrder(hParent, DOTA_UNIT_ORDER_ATTACK_MOVE, nil, nil, hParent:GetAbsOrigin())
	end
end
function modifier_juggernaut_1_juggernaut_01:OnIntervalThink()
	---@type CDOTA_BaseNPC
	local hParent = self:GetParent()
	---@type CDOTABaseAbility
	local hAbility = self:GetAbility()
	local tTargets = FindUnitsInRadiusWithAbility(hParent, self.vCenter, self.radius, hAbility)
	for _, hUnit in ipairs(tTargets) do
		hParent:DealDamage(hUnit, hAbility)
		if hParent:GetScepterLevel() >= 2 then
			hParent:AddGhostMark(hUnit)
		end
	end
	local hTarget = RandomValue(tTargets)
	if IsValid(hTarget) then
		hParent:PerformAttack(hTarget, true, true, true, false, false, false, false)
	end
	local iParticleID = ParticleManager:CreateParticle("particles/units/heroes/hero_juggernaut/juggernaut_1_juggernaut_01_path.vpcf", PATTACH_CUSTOMORIGIN, nil)
	local vStart = self.tPosition[self.count]
	FindClearSpaceForUnit(hParent, vStart, true)
	local vEnd
	if self.count < #self.tPosition then
		vEnd = self.tPosition[self.count + 1]
	else
		vEnd = self.tPosition[1]
	end
	hParent:SetForwardVector((vEnd - vStart):Normalized())
	FindClearSpaceForUnit(hParent, vEnd, true)
	hParent:EmitSound("Hero_Juggernaut.OmniSlash.Damage")
	ParticleManager:SetParticleControl(iParticleID, 0, vStart)
	ParticleManager:SetParticleControl(iParticleID, 1, vEnd)
	ParticleManager:ReleaseParticleIndex(iParticleID)
	self.count = self.count + 1
	if self.count > #self.tPosition then
		self:Destroy()
	end
end
function modifier_juggernaut_1_juggernaut_01:DeclareFunctions()
	return {
		MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL,
		MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL,
		MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE,
		MODIFIER_PROPERTY_OVERRIDE_ANIMATION,
		MODIFIER_PROPERTY_MAX_ATTACK_RANGE = (self.radius or 0) * 2
	-- MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PHYSICAL
	}
end
function modifier_juggernaut_1_juggernaut_01:CheckState()
	return {
		[MODIFIER_STATE_ROOTED] = true,
		[MODIFIER_STATE_MAGIC_IMMUNE] = true,
		[MODIFIER_STATE_NO_HEALTH_BAR] = true,
		[MODIFIER_STATE_NOT_ON_MINIMAP] = true,
		[MODIFIER_STATE_NOT_ON_MINIMAP_FOR_ENEMIES] = true,
	}
end
function modifier_juggernaut_1_juggernaut_01:GetAbsoluteNoDamageMagical()
	return 1
end
function modifier_juggernaut_1_juggernaut_01:GetAbsoluteNoDamagePhysical()
	return 1
end
function modifier_juggernaut_1_juggernaut_01:GetAbsoluteNoDamagePure()
	return 1
end
function modifier_juggernaut_1_juggernaut_01:GetOverrideAnimation()
	return ACT_DOTA_OVERRIDE_ABILITY_4
end
function modifier_juggernaut_1_juggernaut_01:GetModifierProcAttack_BonusDamage_Physical(params)
	if params.target then
		return self.damage * self:GetParent():GetAverageTrueAttackDamage(params.target)
	end
end