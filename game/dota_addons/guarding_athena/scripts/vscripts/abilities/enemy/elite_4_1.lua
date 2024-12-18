--Abilities
if elite_4_1 == nil then
	elite_4_1 = class({})
end
function elite_4_1:OnSpellStart()
	local hCaster = self:GetCaster()
	local hTarget = self:GetCursorTarget()
	local flDamage = self:GetAbilityDamage()

	local iParticleID = ParticleManager:CreateParticle("particles/units/heroes/hero_centaur/centaur_warstomp.vpcf", PATTACH_CUSTOMORIGIN, nil)
	ParticleManager:SetParticleControl(iParticleID, 0, hTarget:GetAbsOrigin())
	ParticleManager:SetParticleControl(iParticleID, 1, Vector(300, 1, 1))
	ParticleManager:ReleaseParticleIndex(iParticleID)

	hCaster:EmitSound("n_creep_Ursa.Clap")

	hCaster:DealDamage(hTarget, self, flDamage)
	hTarget:AddNewModifier(hCaster, self, "modifier_stunned", {duration = self:GetDuration() * hTarget:GetStatusResistanceFactor()})
end