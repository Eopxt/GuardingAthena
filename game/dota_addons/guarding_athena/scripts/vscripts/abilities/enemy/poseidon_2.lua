LinkLuaModifier( "modifier_poseidon_2", "abilities/enemy/poseidon_2.lua", LUA_MODIFIER_MOTION_NONE )
LinkLuaModifier( "modifier_poseidon_2_check", "abilities/enemy/poseidon_2.lua", LUA_MODIFIER_MOTION_NONE )
LinkLuaModifier( "modifier_poseidon_2_animation", "abilities/enemy/poseidon_2.lua", LUA_MODIFIER_MOTION_NONE )
--Abilities
if poseidon_2 == nil then
	poseidon_2 = class({})
end
function poseidon_2:GetCastRange(vLocation, hTarget)
	return self:GetSpecialValueFor("cleave_distance")
end
function poseidon_2:GetIntrinsicModifierName()
	return "modifier_poseidon_2"
end
---------------------------------------------------------------------
--Modifiers
if modifier_poseidon_2 == nil then
	modifier_poseidon_2 = class({}, nil, ModifierHidden)
end
function modifier_poseidon_2:OnCreated(params)
	self.cleave_starting_width = self:GetAbilitySpecialValueFor("cleave_starting_width")
	self.cleave_ending_width = self:GetAbilitySpecialValueFor("cleave_ending_width")
	self.cleave_distance = self:GetAbilitySpecialValueFor("cleave_distance")
	self.damage_bonus = self:GetAbilitySpecialValueFor("damage_bonus")
	self.cleave_damage = self:GetAbilitySpecialValueFor("cleave_damage")
	if IsServer() then
		self:StartIntervalThink(self:GetAbility():GetCooldownTimeRemaining())
	end
end
function modifier_poseidon_2:OnRefresh(params)
	self.cleave_starting_width = self:GetAbilitySpecialValueFor("cleave_starting_width")
	self.cleave_ending_width = self:GetAbilitySpecialValueFor("cleave_ending_width")
	self.cleave_distance = self:GetAbilitySpecialValueFor("cleave_distance")
	self.damage_bonus = self:GetAbilitySpecialValueFor("damage_bonus")
	self.cleave_damage = self:GetAbilitySpecialValueFor("cleave_damage")
end
function modifier_poseidon_2:OnIntervalThink()
	if IsServer() then
		local caster = self:GetParent()
		self.particleID = ParticleManager:CreateParticle("particles/units/heroes/hero_kunkka/kunkka_weapon_tidebringer.vpcf", PATTACH_CUSTOMORIGIN, caster)
		ParticleManager:SetParticleControlEnt(self.particleID, 0, caster, PATTACH_POINT_FOLLOW, "attach_tidebringer", caster:GetAbsOrigin(), true)
		ParticleManager:SetParticleControlEnt(self.particleID, 1, caster, PATTACH_POINT_FOLLOW, "attach_tidebringer_2", caster:GetAbsOrigin(), true)
		ParticleManager:SetParticleControlEnt(self.particleID, 2, caster, PATTACH_POINT_FOLLOW, "attach_sword", caster:GetAbsOrigin(), true)
		self:AddParticle(self.particleID, false, false, -1, false, false)

		-- Can't just emit sound for caster's player
		EmitSoundOnLocationForAllies(caster:GetAbsOrigin(), "Hero_Kunkaa.Tidebringer", caster)
		self:StartIntervalThink(-1)
	end
end
function modifier_poseidon_2:DeclareFunctions()
	return {
		MODIFIER_EVENT_ON_ATTACK_RECORD,
		MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE,
		MODIFIER_PROPERTY_TRANSLATE_ATTACK_SOUND,
		MODIFIER_EVENT_ON_ATTACK,
		MODIFIER_EVENT_ON_ATTACK_LANDED,
		MODIFIER_EVENT_ON_ATTACK_RECORD_DESTROY,
	}
end
function modifier_poseidon_2:OnAttackRecordDestroy(params)
	if not IsValid(params.target) or params.target:GetClassname() == "dota_item_drop" then return end
	if params.attacker == self:GetParent() and not params.attacker:IsIllusion() then
		local modifiers = params.attacker:FindAllModifiersByName("modifier_poseidon_2_check")
		for n, modifier in pairs(modifiers) do
			if params.record == modifier.attack_record then
				modifier:Destroy()
			end
		end
	end
end
function modifier_poseidon_2:OnAttackRecord(params)
	if not IsValid(params.target) or params.target:GetClassname() == "dota_item_drop" then return end
	if params.attacker == self:GetParent() and not params.attacker:AttackFilter(params.record, ATTACK_STATE_NOT_USECASTATTACKORB, ATTACK_STATE_NO_CLEAVE, ATTACK_STATE_NO_EXTENDATTACK) then
		if self:GetAbility():IsCooldownReady() and self:GetAbility():IsOwnersManaEnough() then
			params.attacker:AddNewModifier(params.attacker, self, "modifier_poseidon_2_animation", nil)
			local modifier = params.attacker:AddNewModifier(params.attacker, self:GetAbility(), "modifier_poseidon_2_check", {})
			modifier.attack_record = params.record
		else
			params.attacker:RemoveModifierByName("modifier_poseidon_2_animation")
		end
	end
end
function modifier_poseidon_2:GetModifierPreAttack_BonusDamage(params)
	if IsServer() and params.attacker ~= nil then
		local modifiers = params.attacker:FindAllModifiersByName("modifier_poseidon_2_check")
		for n, modifier in pairs(modifiers) do
			if params.record == modifier.attack_record then
				return self.damage_bonus
			end
		end
	end
end
function modifier_poseidon_2:OnAttackLanded(params)
	if not IsValid(params.target) or params.target:GetClassname() == "dota_item_drop" then return end
	if params.attacker == self:GetParent() then
		local modifiers = params.attacker:FindAllModifiersByName("modifier_poseidon_2_check")
		for n, modifier in pairs(modifiers) do
			if params.record == modifier.attack_record then
				local cleave_damage = self.cleave_damage

				local sParticlePath = ParticleManager:GetParticleReplacement("particles/units/heroes/hero_kunkka/kunkka_spell_tidebringer.vpcf", params.attacker)
				local iParticleID = ParticleManager:CreateParticle(sParticlePath, PATTACH_ABSORIGIN_FOLLOW, params.attacker)
				local n = 0
				DoCleaveAction(params.attacker, params.target, self.cleave_starting_width, self.cleave_ending_width, self.cleave_distance, function(hTarget)
					if IsValid(hTarget) then
						if not params.attacker:IsIllusion() then
							params.attacker:DealDamage(hTarget, self:GetAbility(), params.original_damage*cleave_damage*0.01, DAMAGE_TYPE_PHYSICAL, DOTA_DAMAGE_FLAG_NO_SPELL_AMPLIFICATION+DOTA_DAMAGE_FLAG_NO_SPELL_LIFESTEAL+DOTA_DAMAGE_FLAG_USE_COMBAT_PROFICIENCY)
						end
	
						n = n + 1
	
						ParticleManager:SetParticleControlEnt(iParticleID, n+1, hTarget, PATTACH_ABSORIGIN_FOLLOW, nil, hTarget:GetAbsOrigin(), true)
					end
				end)
				ParticleManager:SetParticleControl(iParticleID, 1, Vector(2, 17, n))
				ParticleManager:ReleaseParticleIndex(iParticleID)
	
				EmitSoundOnLocationWithCaster(params.target:GetAbsOrigin(), "Hero_Kunkka.TidebringerDamage", params.attacker)

				ParticleManager:DestroyParticle(self.particleID, false)

				self:GetAbility():UseResources(true, true, true)
				self:StartIntervalThink(self:GetAbility():GetCooldownTimeRemaining())
			end
		end
	end
end
function modifier_poseidon_2:GetAttackSound(params)
	if IsServer() and params.attacker ~= nil then
		local modifiers = params.attacker:FindAllModifiersByName("modifier_poseidon_2_check")
		for n, modifier in pairs(modifiers) do
			if params.record == modifier.attack_record then
				return "Hero_Kunkka.Tidebringer.Attack"
			end
		end
	end
end
---------------------------------------------------------------------
if modifier_poseidon_2_check == nil then
	modifier_poseidon_2_check = class({})
end
function modifier_poseidon_2_check:IsHidden()
	return true
end
function modifier_poseidon_2_check:IsDebuff()
	return true
end
function modifier_poseidon_2_check:IsPurgable()
	return false
end
function modifier_poseidon_2_check:IsPurgeException()
	return false
end
function modifier_poseidon_2_check:IsStunDebuff()
	return false
end
function modifier_poseidon_2_check:AllowIllusionDuplicate()
	return false
end
function modifier_poseidon_2_check:RemoveOnDeath()
	return false
end
function modifier_poseidon_2_check:GetAttributes()
	return MODIFIER_ATTRIBUTE_MULTIPLE + MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE + MODIFIER_ATTRIBUTE_PERMANENT
end
---------------------------------------------------------------------
if modifier_poseidon_2_animation == nil then
	modifier_poseidon_2_animation = class({})
end
function modifier_poseidon_2_animation:IsHidden()
	return true
end
function modifier_poseidon_2_animation:IsDebuff()
	return true
end
function modifier_poseidon_2_animation:IsPurgable()
	return false
end
function modifier_poseidon_2_animation:IsPurgeException()
	return false
end
function modifier_poseidon_2_animation:IsStunDebuff()
	return false
end
function modifier_poseidon_2_animation:AllowIllusionDuplicate()
	return false
end
function modifier_poseidon_2_animation:RemoveOnDeath()
	return false
end
function modifier_poseidon_2_animation:DeclareFunctions()
	return {
		MODIFIER_PROPERTY_TRANSLATE_ACTIVITY_MODIFIERS,
	}
end
function modifier_poseidon_2_animation:GetActivityTranslationModifiers(params)
	return "tidebringer"
end