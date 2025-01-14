LinkLuaModifier("modifier_item_mystletainn", "abilities/items/artifact/item_mystletainn.lua", LUA_MODIFIER_MOTION_NONE)
LinkLuaModifier("modifier_item_mystletainn_debuff", "abilities/items/artifact/item_mystletainn.lua", LUA_MODIFIER_MOTION_NONE)
-- Abilities
if item_mystletainn == nil then
	item_mystletainn = class({})
end
function item_mystletainn:GetIntrinsicModifierName()
	return "modifier_item_mystletainn"
end
---------------------------------------------------------------------
-- Modifier
if modifier_item_mystletainn == nil then
	modifier_item_mystletainn = class({}, nil, ModifierItemBasic)
end
function modifier_item_mystletainn:OnCreated(params)
	self.attribute = self:GetAbilitySpecialValueFor("attribute")
	self.duration = self:GetAbilitySpecialValueFor("duration")
	self.attack = self:GetAbilitySpecialValueFor("attack")
	self.critical = self:GetAbilitySpecialValueFor("critical")
	self.absorb = self:GetAbilitySpecialValueFor("absorb")
	self.interval = self:GetAbilitySpecialValueFor("interval")
	self.critical_rate = self:GetAbilitySpecialValueFor("critical_rate")
	self.attack_increase = self:GetAbilitySpecialValueFor("attack_increase")
	self.attack_rate = self:GetAbilitySpecialValueFor("attack_rate")
	if IsServer() then
		local hParent = self:GetParent()
		if self:GetAbility().iAttack == nil then
			self:GetAbility().iAttack = 0
		end
		hParent:SetBaseAttackTime(hParent:GetBaseAttackTime() - self.attack_rate)

		self:StartIntervalThink(self.interval)
	end
end
function modifier_item_mystletainn:OnDestroy()
	if IsServer() then
		local hParent = self:GetParent()
		hParent:SetBaseAttackTime(hParent:GetBaseAttackTime() + self.attack_rate)
	end
end
function modifier_item_mystletainn:OnIntervalThink()
	if IsServer() then
		local hParent = self:GetParent()
		local flDamage = self.absorb * hParent:GetMaxHealth() * 0.01
		if hParent:GetHealth() > flDamage then
			-- local tDamageInfo = CreateDamageTable(hParent, hParent, self:GetAbility(), flDamage, DAMAGE_TYPE_PURE, DOTA_DAMAGE_FLAG_HPLOSS + DOTA_DAMAGE_FLAG_NON_LETHAL + DOTA_DAMAGE_FLAG_NO_SPELL_AMPLIFICATION)
			-- ApplyDamage(tDamageInfo)
			-- RemoveHealth(hParent, flDamage)
			self:GetAbility().iAttack = self:GetAbility().iAttack + 1
			hParent:ModifyHealth(hParent:GetHealth() - flDamage, self:GetAbility(), false, 0)
			hParent:SetBaseDamageMax(self:GetAbility().iAttack * self.attack_increase)
			hParent:SetBaseDamageMin(self:GetAbility().iAttack * self.attack_increase)
		end
	end
end
function modifier_item_mystletainn:DeclareFunctions()
	return {
		MODIFIER_PROPERTY_STATS_STRENGTH_BONUS,
		MODIFIER_PROPERTY_STATS_AGILITY_BONUS,
		MODIFIER_PROPERTY_STATS_INTELLECT_BONUS,
		MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE,
		MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PHYSICAL,
	}
end
function modifier_item_mystletainn:GetModifierPreAttack_BonusDamage()
	return self.attack
end
function modifier_item_mystletainn:GetModifierBonusStats_Strength()
	return self.attribute
end
function modifier_item_mystletainn:GetModifierBonusStats_Agility()
	return self.attribute
end
function modifier_item_mystletainn:GetModifierBonusStats_Intellect()
	return self.attribute
end
function modifier_item_mystletainn:GetModifierProcAttack_BonusDamage_Physical(params)
	if params.target == nil then return end
	if params.target:GetClassname() == "dota_item_drop" then return end
	if params.attacker == self:GetParent() and not params.attacker:IsIllusion() then
		if RollPercentage(self.critical_rate) then
			params.target:AddNewModifier(params.attacker, self:GetAbility(), "modifier_item_mystletainn_debuff", {duration = self.duration})
			CreateNumberEffect(params.target, params.damage * self.critical, 1.5, MSG_ORIT, "orange", 4)
			return params.damage * self.critical
		end
	end
end
---------------------------------------------------------------------
if modifier_item_mystletainn_debuff == nil then
	modifier_item_mystletainn_debuff = class({}, nil, ModifierDebuff)
end
function modifier_item_mystletainn_debuff:OnCreated(params)
	self.damage_deepen = self:GetAbilitySpecialValueFor("damage_deepen")
end
function modifier_item_mystletainn_debuff:DeclareFunctions()
	return {
		MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_PERCENTAGE,
	}
end
function modifier_item_mystletainn_debuff:GetModifierIncomingPhysicalDamage_Percentage()
	return self.damage_deepen + 100
end