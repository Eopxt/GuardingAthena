if modifier_courier_fx_ambient_45 == nil then
	modifier_courier_fx_ambient_45 = class({})
end

local public = modifier_courier_fx_ambient_45

function public:IsHidden()
	return true
end
function public:IsDebuff()
	return false
end
function public:IsPurgable()
	return false
end
function public:IsPurgeException()
	return false
end
function public:AllowIllusionDuplicate()
	return false
end
function public:RemoveOnDeath()
	return false
end
function public:OnCreated(params)
	if IsClient() then
		local iParticleID = ParticleManager:CreateParticle("particles/econ/courier/courier_smeevil/courier_smeevil_crab_ambient.vpcf", PATTACH_RENDERORIGIN_FOLLOW, self:GetParent())
		ParticleManager:SetParticleControlEnt(iParticleID, 0, self:GetParent(), PATTACH_RENDERORIGIN_FOLLOW, nil, self:GetParent():GetAbsOrigin(), true)
		ParticleManager:SetParticleControlEnt(iParticleID, 1, self:GetParent(), PATTACH_POINT_FOLLOW, "attach_hitloc", self:GetParent():GetAbsOrigin(), true)
		ParticleManager:SetParticleControl(iParticleID, 13, Vector(1, 0, 0))
		self:AddParticle(iParticleID, true, false, -1, false, false)
	end
end