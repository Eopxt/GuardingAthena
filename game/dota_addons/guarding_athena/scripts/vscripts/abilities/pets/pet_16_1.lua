LinkLuaModifier( "modifier_pet_16_1", "abilities/pets/pet_16_1.lua", LUA_MODIFIER_MOTION_NONE )
LinkLuaModifier( "modifier_pet_16_1_aura", "abilities/pets/pet_16_1.lua", LUA_MODIFIER_MOTION_NONE )
--Abilities
if pet_16_1 == nil then
	pet_16_1 = class({})
end
function pet_16_1:GetCastRange(vLocation, hTarget)
	return self:GetSpecialValueFor("radius")
end
function pet_16_1:GetIntrinsicModifierName()
	return "modifier_pet_16_1"
end
---------------------------------------------------------------------
--Modifiers
if modifier_pet_16_1 == nil then
	modifier_pet_16_1 = class({}, nil, ModifierHidden)
end
function modifier_pet_16_1:IsAura()
	return true
end
function modifier_pet_16_1:GetAuraRadius()
	return self.radius
end
function modifier_pet_16_1:GetAuraSearchTeam()
	return DOTA_UNIT_TARGET_TEAM_ENEMY
end
function modifier_pet_16_1:GetAuraSearchType()
	return DOTA_UNIT_TARGET_BASIC + DOTA_UNIT_TARGET_HERO
end
function modifier_pet_16_1:GetAuraSearchFlags()
	return DOTA_UNIT_TARGET_FLAG_NONE
end
function modifier_pet_16_1:GetModifierAura()
	return "modifier_pet_16_1_aura"
end
function modifier_pet_16_1:OnCreated(params)
	self.radius = self:GetAbilitySpecialValueFor("radius")
	if IsServer() then
	end
end
---------------------------------------------------------------------
if modifier_pet_16_1_aura == nil then
	modifier_pet_16_1_aura = class({}, nil, ModifierBasic)
end
function modifier_pet_16_1_aura:IsDebuff()
	return true
end
function modifier_pet_16_1_aura:OnCreated(params)
	self.movespeed = self:GetAbilitySpecialValueFor("movespeed")
	self.attackspeed = self:GetAbilitySpecialValueFor("attackspeed")
	if IsServer() then
	else
		local iParticleID = ParticleManager:CreateParticle("particles/generic_gameplay/generic_slowed_cold.vpcf", PATTACH_ABSORIGIN_FOLLOW, self:GetParent())
		self:AddParticle(iParticleID, false, false, -1, false, false)
	end
end
function modifier_pet_16_1_aura:GetModifierMoveSpeedBonus_Percentage()
	return -self.movespeed
end
function modifier_pet_16_1_aura:GetModifierAttackSpeedBonus_Constant()
	return -self.attackspeed
end
function modifier_pet_16_1_aura:DeclareFunctions()
	return {
		MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE,
		MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT
	}
end