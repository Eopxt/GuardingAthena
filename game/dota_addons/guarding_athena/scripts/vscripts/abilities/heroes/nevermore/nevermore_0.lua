LinkLuaModifier( "modifier_nevermore_0", "abilities/heroes/nevermore/nevermore_0.lua", LUA_MODIFIER_MOTION_NONE )
--Abilities
if nevermore_0 == nil then
	nevermore_0 = class({})
end
function nevermore_0:GetCooldown(iLevel)
	if self:GetCaster():GetScepterLevel() >= 1 then
		return self:GetSpecialValueFor("scepter_cooldown")
	end
	return self.BaseClass.GetCooldown(self, iLevel)
end
function nevermore_0:GetIntrinsicModifierName()
	return "modifier_nevermore_0"
end
---------------------------------------------------------------------
--Modifiers
if modifier_nevermore_0 == nil then
	modifier_nevermore_0 = class({}, nil, ModifierBasic)
end
function modifier_nevermore_0:OnCreated(params)
	self.radius = self:GetAbilitySpecialValueFor("radius")
	self.damage = self:GetAbilitySpecialValueFor("damage")
	self.trigger_pct = self:GetAbilitySpecialValueFor("trigger_pct")
	self.respawn_cooldown = self:GetAbilitySpecialValueFor("respawn_cooldown")
	if IsServer() then
	end
	AddModifierEvents(MODIFIER_EVENT_ON_DEATH, self, self:GetParent())
	AddModifierEvents(MODIFIER_EVENT_ON_ATTACK_LANDED, self, self:GetParent())
end
function modifier_nevermore_0:OnRefresh(params)
	self.radius = self:GetAbilitySpecialValueFor("radius")
	self.damage = self:GetAbilitySpecialValueFor("damage")
	self.trigger_pct = self:GetAbilitySpecialValueFor("trigger_pct")
	self.respawn_cooldown = self:GetAbilitySpecialValueFor("respawn_cooldown")
	if IsServer() then
	end
end
function modifier_nevermore_0:OnDestroy()
	if IsServer() then
	end
	RemoveModifierEvents(MODIFIER_EVENT_ON_DEATH, self, self:GetParent())
	RemoveModifierEvents(MODIFIER_EVENT_ON_ATTACK_LANDED, self, self:GetParent())
end
function modifier_nevermore_0:DeclareFunctions()
	return {
		MODIFIER_PROPERTY_STATS_STRENGTH_BONUS,
		MODIFIER_PROPERTY_REINCARNATION
	}
end
function modifier_nevermore_0:Action(vPosition)
	local hParent = self:GetParent()
	local hAbility = self:GetAbility()
	local flDamage = self.damage * hParent:GetStrength()
	-- cooldown
	-- self:GetAbility():UseResources(false, false, true)
	hAbility:StartCooldown(hAbility:GetCooldown(0))
	
	-- damage
	local tTargets = FindUnitsInRadiusWithAbility(hParent, vPosition, self.radius, hAbility)
	hParent:DealDamage(tTargets, hAbility, flDamage)
	-- particle
	local iParticleID = ParticleManager:CreateParticle("particles/heroes/tartarus/fractured_soul.vpcf", PATTACH_CUSTOMORIGIN, nil)
	ParticleManager:SetParticleControl(iParticleID, 0, vPosition)
	self:AddParticle(iParticleID, false, false, -1, false, false)
	EmitSoundOnLocationWithCaster(vPosition, "Hero_Nevermore.Shadowraze", hParent)
end
function modifier_nevermore_0:AddStrength(iStrength)
	-- 增加力量
	if self:GetStackCount() < self:GetParent():GetBaseStrength() then
		self:SetStackCount(self:GetStackCount() + math.min(iStrength, self:GetParent():GetBaseStrength() - self:GetStackCount()))
	end
end
function modifier_nevermore_0:OnDeath(params)
	if IsServer() then
		if not IsValid(params.unit) then return end
		if params.attacker == self:GetParent() then
			if self:GetAbility():IsCooldownReady() then
				self:Action(params.unit:GetAbsOrigin())
			end
			-- 增加力量
			self:AddStrength(1)
		end
	end
end
function modifier_nevermore_0:OnAttackLanded(params)
	if not IsValid(params.target) or params.target:GetClassname() == "dota_item_drop" then return end
	if params.attacker == self:GetParent() and self:GetAbility():IsCooldownReady() and self:GetParent():GetScepterLevel() >= 1 then
		self:Action(params.target:GetAbsOrigin())
	end
end
function modifier_nevermore_0:GetModifierBonusStats_Strength()
	return self:GetStackCount()
end
function modifier_nevermore_0:ReincarnateTime()
	if self:GetStackCount() >= self:GetParent():GetBaseStrength() * self.trigger_pct * 0.01 and self:GetAbility():GetCooldownTimeRemaining() < 1 then
		self:SetStackCount(math.floor(self:GetStackCount() * 0.5))
		self:GetAbility():StartCooldown(self.respawn_cooldown)
		return 1
	end
end