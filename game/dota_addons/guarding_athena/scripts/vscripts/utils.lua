-- 获取文件域
function getFileScope(self)
	local level = 1
	while true do
		local info = debug.getinfo(level, "S")
		if info and (info.what == "main") then
			return {
				getfenv(level),
				info.source
			}
		end
		level = level + 1
	end
end
-- 分割字符串
function string.split(str, delimiter)
	if str == nil or str == '' or delimiter == nil then
		return nil
	end

	local result = {}
	for match in (str .. delimiter):gmatch("(.-)" .. delimiter) do
		table.insert(result, match)
	end
	return result
end

-- 分割字符串的字母
function string.gsplit(str)
	local str_tb = {}
	if string.len(str) ~= 0 then
		for i = 1, string.len(str) do
			new_str = string.sub(str, i, i)
			if (string.byte(new_str) >= 48 and string.byte(new_str) <= 57) or (string.byte(new_str) >= 65 and string.byte(new_str) <= 90) or (string.byte(new_str) >= 97 and string.byte(new_str) <= 122) then
				table.insert(str_tb, string.sub(str, i, i))
			else
				return nil
			end
		end
		return str_tb
	else
		return nil
	end
end

--获取表中最大值
function table.max(t)
	local key = nil
	local value = nil
	for k, v in pairs(t) do
		if value == nil or value <= v then
			value = v
			key = k
		end
	end
	if value == nil then
		return false
	end
	return key, value
end

function IsLeapYear(iYear)
	return (iYear % 4 == 0 and iYear % 100 ~= 0) or (iYear % 400 == 0)
end

function toUnixTime(iYear, iMonth, iDay, iHour, iMin, iSec)
	local iTotalSec = iSec + iMin * 60 + iHour * 60 * 60 + (iDay - 1) * 86400

	-- 此年经过的秒
	local iTotalDay = 0
	local iTotalMonth = iMonth - 1
	for i = 1, iTotalMonth, 1 do
		if i == 1 or i == 3 or i == 5 or i == 7 or i == 8 or i == 10 or i == 12 then
			iTotalDay = iTotalDay + 31
		elseif i == 4 or i == 6 or i == 9 or i == 11 then
			iTotalDay = iTotalDay + 30
		else
			if IsLeapYear(iYear) then
				iTotalDay = iTotalDay + 29
			else
				iTotalDay = iTotalDay + 28
			end
		end
	end

	-- 之前的年经过的秒
	for i = 1970, iYear - 1, 1 do
		if IsLeapYear(i) then
			iTotalDay = iTotalDay + 366
		else
			iTotalDay = iTotalDay + 365
		end
	end

	iTotalSec = iTotalSec + iTotalDay * 86400

	return iTotalSec
end
-- 返回表的值数量
function TableCount(t)
	local n = 0
	for _ in pairs(t) do
		n = n + 1
	end
	return n
end

-- 获取表里随机一个值
function RandomValue(t)
	local iRandom = RandomInt(1, TableCount(t))
	local n = 0
	for k, v in pairs(t) do
		n = n + 1
		if n == iRandom then
			return v
		end
	end
end

-- 获取数组里随机一个值
function GetRandomElement(table)
	return table[RandomInt(1, #table)]
end

-- 从表里寻找值的键
function TableFindKey(t, v)
	if t == nil then
		return nil
	end

	for _k, _v in pairs(t) do
		if v == _v then
			return _k
		end
	end
	return nil
end

-- 从表里移除值
function ArrayRemove(t, v)
	if t == nil then return end
	for i = #t, 1, -1 do
		if t[i] == v then
			table.remove(t, i)
		end
	end
end

-- 深拷贝
function deepcopy(orig)
	local copy
	if type(orig) == "table" then
		copy = {}
		for orig_key, orig_value in next, orig, nil do
			copy[deepcopy(orig_key)] = deepcopy(orig_value)
		end
		setmetatable(copy, deepcopy(getmetatable(orig)))
	else
		copy = orig
	end
	return copy
end

-- 浅拷贝
function shallowcopy(orig)
	local copy
	if type(orig) == 'table' then
		copy = {}
		for orig_key, orig_value in pairs(orig) do
			copy[orig_key] = orig_value
		end
	else -- number, string, boolean, etc
		copy = orig
	end
	return copy
end

-- 乱序
function ShuffledList(orig_list)
	local list = shallowcopy(orig_list)
	local result = {}
	local count = #list
	for i = 1, count do
		local pick = RandomInt(1, #list)
		result[#result + 1] = list[pick]
		table.remove(list, pick)
	end
	return result
end

-- table覆盖
function TableOverride(mainTable, table)
	if mainTable == nil then
		return table
	end
	if table == nil or type(table) ~= "table" then
		return mainTable
	end

	for k, v in pairs(table) do
		if type(v) == "table" then
			mainTable[k] = TableOverride(mainTable[k], v)
		else
			mainTable[k] = v
		end
	end
	return mainTable
end

-- table去重
function TableRemoveDuplicate(t)
	local bExist = {}
	for _, v in ipairs(t) do
		bExist[v] = true
	end
	local result = {}
	for k, v in pairs(bExist) do
		table.insert(result, k)
	end

	return result
end

-- 四舍五入，s为精度
function Round(n, s)
	s = math.pow(10, -s)
	local sign = 1
	if n < 0 then
		n = math.abs(n)
		sign = -1
	end
	s = s or 1
	if n ~= nil then
		local d = n / s
		local w = math.floor(d)
		if d - w >= 0.5 then
			return (w + 1) * s * sign
		else
			return w * s * sign
		end
	end
	return 0
end

-- 判断两条线是否相交
function IsLineCross(pt1_1, pt1_2, pt2_1, pt2_2)
	return math.min(pt1_1.x, pt1_2.x) <= math.max(pt2_1.x, pt2_2.x) and math.min(pt2_1.x, pt2_2.x) <= math.max(pt1_1.x, pt1_2.x) and math.min(pt1_1.y, pt1_2.y) <= math.max(pt2_1.y, pt2_2.y) and math.min(pt2_1.y, pt2_2.y) <= math.max(pt1_1.y, pt1_2.y)
end

-- 跨立实验
function IsCross(p1, p2, p3)
	local x1 = p2.x - p1.x
	local y1 = p2.y - p1.y
	local x2 = p3.x - p1.x
	local y2 = p3.y - p1.y
	return x1 * y2 - x2 * y1
end

-- 判断两条线段是否相交
function IsIntersect(p1, p2, p3, p4)
	if IsLineCross(p1, p2, p3, p4) then
		if IsCross(p1, p2, p3) * IsCross(p1, p2, p4) <= 0 and IsCross(p3, p4, p1) * IsCross(p3, p4, p2) <= 0 then
			return true
		end
	end
	return false
end

-- 计算两条线段的交点
function GetCrossPoint(p1, p2, q1, q2)
	if IsIntersect(p1, p2, q1, q2) then
		local x = 0
		local y = 0
		local left = (q2.x - q1.x) * (p1.y - p2.y) - (p2.x - p1.x) * (q1.y - q2.y)
		local right = (p1.y - q1.y) * (p2.x - p1.x) * (q2.x - q1.x) + q1.x * (q2.y - q1.y) * (p2.x - p1.x) - p1.x * (p2.y - p1.y) * (q2.x - q1.x)

		if left == 0 then
			return vec3_invalid
		end
		x = right / left

		left = (p1.x - p2.x) * (q2.y - q1.y) - (p2.y - p1.y) * (q1.x - q2.x)
		right = p2.y * (p1.x - p2.x) * (q2.y - q1.y) + (q2.x - p2.x) * (q2.y - q1.y) * (p1.y - p2.y) - q2.y * (q1.x - q2.x) * (p2.y - p1.y)
		if left == 0 then
			return vec3_invalid
		end
		y = right / left

		return Vector(x, y, 0)
	end

	return vec3_invalid
end

-- 将c++里传出来的str形式的vector转换为vector
function StringToVector(str)
	if str == nil then return end
	local table = string.split(str, " ")
	return Vector(tonumber(table[1]), tonumber(table[2]), tonumber(table[3])) or nil
end

-- 以逆时针方向旋转
function Rotation2D(vVector, radian)
	local fLength2D = vVector:Length2D()
	local vUnitVector2D = vVector / fLength2D
	local fCos = math.cos(radian)
	local fSin = math.sin(radian)
	return Vector(vUnitVector2D.x * fCos - vUnitVector2D.y * fSin, vUnitVector2D.x * fSin + vUnitVector2D.y * fCos, vUnitVector2D.z) * fLength2D
end

-- 判断点是否在不规则图形里（不规则图形里是点集，点集每个都是固定住的）
function IsPointInPolygon(point, polygonPoints)
	local j = #polygonPoints
	local bool = 0
	for i = 1, #polygonPoints, 1 do
		local polygonPoint1 = polygonPoints[j]
		local polygonPoint2 = polygonPoints[i]
		if ((polygonPoint2.y < point.y and polygonPoint1.y >= point.y) or (polygonPoint1.y < point.y and polygonPoint2.y >= point.y)) and (polygonPoint2.x <= point.x or polygonPoint1.x <= point.x) then
			bool = bit.bxor(bool, ((polygonPoint2.x + (point.y - polygonPoint2.y) / (polygonPoint1.y - polygonPoint2.y) * (polygonPoint1.x - polygonPoint2.x)) < point.x and 1 or 0))
		end
		j = i
	end
	return bool == 1
end

-- 控制台打印单位所有的modifier
function PrintAllModifiers(hUnit)
	local modifiers = hUnit:FindAllModifiers()
	for n, modifier in pairs(modifiers) do
		local str = ""
		str = str .. "modifier name: " .. modifier:GetName()
		if modifier:GetCaster() ~= nil then
			str = str .. "\tcaster: " .. modifier:GetCaster():GetName()
			str = str .. "\t(" .. tostring(modifier:GetCaster()) .. ")"
		end
		if modifier:GetAbility() ~= nil then
			str = str .. "\tability: " .. modifier:GetAbility():GetName()
			str = str .. "\t(" .. tostring(modifier:GetAbility()) .. ")"
		end
		print(str)
	end
end

function CEntityInstance:Remove()
	FireGameEvent("custom_entity_removed", {
		entindex = self:entindex(),
	})
	if type(self.FindAllModifiers) == "function" then
		local tModifiers = self:FindAllModifiers()
		for k, v in pairs(tModifiers) do
			v:Destroy()
		end
	end
	UTIL_Remove(self)
end

-- 显示错误信息
function ErrorMessage(playerID, message, sound)
	if message == nil then
		sound = message
		message = playerID
		playerID = nil
	else
		assert(type(playerID) == "number", "playerID is not a number")
	end
	if playerID == nil then
		CustomGameEventManager:Send_ServerToAllClients("error_message", { message = message, sound = sound })
	else
		local player = PlayerResource:GetPlayer(playerID)
		CustomGameEventManager:Send_ServerToPlayer(player, "error_message", { message = message, sound = sound })
	end
end

---在单位周围丢下物品
function DropItemAroundUnit(hDropUnit, item, hTargetUnit)
	if not IsValid(hDropUnit) then
		return
	end
	if not IsValid(hTargetUnit) then
		hTargetUnit = hDropUnit
	end
	local position = hTargetUnit:GetAbsOrigin() + Vector(RandomFloat(-50, 50), RandomFloat(-50, 50), 0)
	hDropUnit:TakeItem(item)
	CreateItemOnPosition(position, item)
end

function CreateItemOnPosition(position, item)
	local hContainer = CreateItemOnPositionForLaunch(position, item)

	return hContainer
end

-- 创建一个物品给单位，如果单位身上没地方放了，就扔在他附近随机位置
function CreateItemToUnit(hUnit, sItemName)
	local hItem = CreateItem(sItemName, hUnit, hUnit)
	hItem:SetPurchaseTime(0)
	hUnit:AddItem(hItem)
	if IsValid(hItem) and hItem:GetParent() ~= hUnit and hItem:GetContainer() == nil then
		hItem:SetParent(hUnit, "")
		CreateItemOnPosition(hUnit:GetAbsOrigin() + Vector(RandomFloat(-50, 50), RandomFloat(-50, 50), 0), hItem)
	end
end

-- 判断一个handle是否为无效值
function IsValid(h)
	return h ~= nil and not h:IsNull()
end

---默认值
function default(v, def)
	if def == nil then return v end
	if v == nil then return def end
	return v
end

if IsClient() then
	-- 计时器
	function C_BaseEntity:Timer(sContextName, fInterval, funcThink)
		if funcThink == nil then
			funcThink = fInterval
			fInterval = sContextName
			sContextName = DoUniqueString("Timer")
		end
		self:SetContextThink(sContextName, function()
			local result = funcThink()
			if type(result) == "number" then
				result = math.max(FrameTime(), result)
			end
			return result
		end, fInterval)
		return sContextName
	end
	-- 游戏计时器
	function C_BaseEntity:GameTimer(sContextName, fInterval, funcThink)
		if funcThink == nil then
			funcThink = fInterval
			fInterval = sContextName
			sContextName = DoUniqueString("GameTimer")
		end
		local fTime = GameRules:GetGameTime() + math.max(FrameTime(), fInterval)
		return self:Timer(sContextName, fInterval, function()
			if GameRules:GetGameTime() >= fTime then
				local result = funcThink()
				if type(result) == "number" then
					fTime = fTime + math.max(FrameTime(), result)
				end
				return result
			end
			return 0
		end)
	end
	-- 暂停计时器
	function C_BaseEntity:StopTimer(sContextName)
		self:SetContextThink(sContextName, nil, 0)
	end
	--单位类型判断
	function C_DOTA_BaseNPC:IsRoshan()
		return self:GetUnitName() == "wave_55"
	end
	function C_DOTA_BaseNPC:IsGoldWave()
		return self:GetUnitName() == "wave_gold" or self:GetUnitName() == "wave_goldx3"
	end
	function C_DOTA_BaseNPC:SetWaveTag(tag)
		self.b_wave_tage = tag and true or false
	end
	function C_DOTA_BaseNPC:IsWave()
		return self.b_wave_tage
	end
	function C_DOTA_BaseNPC:GetRebornTimes()
		return self:HasModifier("modifier_reborn") and self:GetModifierStackCount("modifier_reborn", self) or 0
	end
	function C_DOTA_BaseNPC:GetScepterLevel()
		return (self:HasModifier("modifier_reborn") and self:HasScepter()) and self:GetRebornTimes() or 0
	end
end

if IsServer() then
	--[[		计时器
		sContextName，计时器索引，可缺省
		fInterval，第一次运行延迟
		funcThink，回调函数，函数返回number将会再次延迟运行
		例：
		hUnit:GameTimer(0.5, function()
			hUnit:SetModelScale(1.5)
		end)
		GameRules:GetGameModeEntity():GameTimer(0.5, function()
			print(math.random())
			return 0.5
		end)
	]]
	--
	function CBaseEntity:Timer(sContextName, fInterval, funcThink)
		if funcThink == nil then
			funcThink = fInterval
			fInterval = sContextName
			sContextName = DoUniqueString("Timer")
		end
		self:SetContextThink(sContextName, function()
			local result = funcThink()
			if type(result) == "number" then
				result = math.max(FrameTime(), result)
			end
			return result
		end, fInterval)
		return sContextName
	end
	--[[		游戏计时器，游戏暂停会停下
	]]
	--
	function CBaseEntity:GameTimer(sContextName, fInterval, funcThink)
		if funcThink == nil then
			funcThink = fInterval
			fInterval = sContextName
			sContextName = DoUniqueString("GameTimer")
		end
		local fTime = GameRules:GetGameTime() + math.max(FrameTime(), fInterval)
		return self:Timer(sContextName, fInterval, function()
			if GameRules:GetGameTime() >= fTime then
				local result = funcThink()
				if type(result) == "number" then
					fTime = fTime + math.max(FrameTime(), result)
				end
				return result
			end
			return 0
		end)
	end
	--[[		暂停计时器，包括游戏计时器
	]]
	--
	function CBaseEntity:StopTimer(sContextName)
		self:SetContextThink(sContextName, nil, 0)
	end

	--[[		暂停计时器，包括游戏计时器
	]]
	--
	function CBaseEntity:StopTimer(sContextName)
		self:SetContextThink(sContextName, nil, -1)
	end
	--- 游戏计时器，游戏暂停会停下 GameRules:GetGameModeEntity():GameTimer()
	function GameTimer(sContextName, fInterval, funcThink)
		return GameRules:GetGameModeEntity():GameTimer(sContextName, fInterval, funcThink)
	end
	function StopGameTimer(sContextName)
		return GameRules:GetGameModeEntity():StopTimer(sContextName)
	end
	--- 游戏计时器，游戏暂停bu会停下 GameRules:GetGameModeEntity():GameTimer()
	function Timer(sContextName, fInterval, funcThink)
		return GameRules:GetGameModeEntity():Timer(sContextName, fInterval, funcThink)
	end
	function StopTimer(sContextName)
		return GameRules:GetGameModeEntity():StopTimer(sContextName)
	end

	function CDOTA_BaseNPC:GetItemSlot(hItem)
		if hItem == nil or not hItem:IsItem() then
			return -1
		end
		for i = 0, 14 do
			local item = self:GetItemInSlot(i)
			if item ~= nil and item == hItem then
				return i
			end
		end
		return -1
	end
	---获取单位kv的数值
	function CDOTA_BaseNPC:GetUnitKeyValue(sKey)
		if KeyValues.UnitsKv[self:GetUnitName()] then
			return KeyValues.UnitsKv[self:GetUnitName()][sKey]
		end
	end

	if CDOTA_BaseNPC_Hero.ModifyGold_Engine == nil then
		CDOTA_BaseNPC_Hero.ModifyGold_Engine = CDOTA_BaseNPC_Hero.ModifyGold
	end
	---调整单位金钱
	---@return boolean
	function CDOTA_BaseNPC_Hero:ModifyGold(iGold, bShow, nReason)
		if not self:IsHero() then
			return
		end
		bShow = bShow or true
		nReason = nReason or DOTA_ModifyGold_CreepKill
		if self:GetGold() + iGold < 0 then
			return false
		end
		self:ModifyGold_Engine(iGold, true, nReason)
		if bShow then
			if iGold > 0 then
				local iPlayerID = self:GetPlayerID()
				local hPlayer = PlayerResource:GetPlayer(iPlayerID)
				SendOverheadEventMessage(hPlayer, OVERHEAD_ALERT_GOLD, self, iGold, hPlayer)
			elseif iGold < 0 then
				local iNumberCount = #tostring(math.floor(iGold))
				local iParticleID = ParticleManager:CreateParticle("particles/msg_fx/msg_gold.vpcf", PATTACH_CUSTOMORIGIN, self)
				ParticleManager:SetParticleControlEnt(iParticleID, 0, self, PATTACH_CENTER_FOLLOW, nil, self:GetAbsOrigin(), true)
				ParticleManager:SetParticleControl(iParticleID, 1, Vector(1, math.abs(iGold), 0))
				ParticleManager:SetParticleControl(iParticleID, 2, Vector(2, iNumberCount, 0))
				ParticleManager:SetParticleControl(iParticleID, 3, Vector(200, 165, 0))
				ParticleManager:ReleaseParticleIndex(iParticleID)
				local iParticleID = ParticleManager:CreateParticle("particles/generic_gameplay/lasthit_coins.vpcf", PATTACH_CUSTOMORIGIN, self)
				ParticleManager:SetParticleControlEnt(iParticleID, 1, self, PATTACH_CENTER_FOLLOW, nil, self:GetAbsOrigin(), true)
				ParticleManager:ReleaseParticleIndex(iParticleID)
				self:EmitSound("General.Buy")
			end
		end
		return true
	end

	function CDOTA_BaseNPC:FindModifierByNameAndAbility(sModifierName, hAbility)
		local tModifiers = self:FindAllModifiersByName(sModifierName)
		for _, hModifier in pairs(tModifiers) do
			if hModifier:GetAbility() == hAbility then
				return hModifier
			end
		end
	end

	function CDOTA_BaseNPC:ModifyPrimaryAttribute(fChanged)
		if self:GetPrimaryAttribute() == DOTA_ATTRIBUTE_STRENGTH then
			self:ModifyStrength(fChanged)
		elseif self:GetPrimaryAttribute() == DOTA_ATTRIBUTE_AGILITY then
			self:ModifyAgility(fChanged)
		elseif self:GetPrimaryAttribute() == DOTA_ATTRIBUTE_INTELLECT then
			self:ModifyIntellect(fChanged)
		end
	end

	function CDOTA_BaseNPC:ModifyMaxHealth(fChanged)
		local fHealthPercent = self:GetHealth() / self:GetMaxHealth()
		self.fBaseHealth = (self.fBaseHealth or self:GetMaxHealth()) + fChanged
		local fBonusHealth = (GetBonusHealthPercentage ~= nil and GetBonusHealthPercentage(self) * 0.01 or 0) * self.fBaseHealth
		local fHealth = self.fBaseHealth + fBonusHealth
		local fCorrectHealth = math.min(math.max(1, fHealth), MAX_HEALTH)
		self:SetBaseMaxHealth(fCorrectHealth)
		self:SetMaxHealth(fCorrectHealth)
		self:ModifyHealth(fHealthPercent * fCorrectHealth, nil, false, 0)
	end

	function CDOTA_BaseNPC:ModifyMaxMana(fChanged)
		local fManaPercent = self:GetMana() / self:GetMaxMana()
		self.fBaseMana = (self.fBaseMana or self:GetMaxMana()) + fChanged
		local fBonusMana = (GetBonusManaPercentage ~= nil and GetBonusManaPercentage(self) * 0.01 or 0) * self.fBaseMana
		local fMana = self.fBaseMana + fBonusMana
		local fCorrectMana = math.min(math.max(1, fMana), MAX_MANA)
		-- self:SetMaxMana(fCorrectMana)
		-- self:SetMana(fManaPercent*fCorrectMana)
		local hModifier = self:FindModifierByName("modifier_max_mana")
		if not IsValid(hModifier) then
			hModifier = self:AddNewModifier(self, nil, "modifier_max_mana", nil)
			if IsValid(hModifier) then
				hModifier.fBaseMana = fCorrectMana
			end
		end
		if IsValid(hModifier) then
			hModifier:SetStackCount(fCorrectMana - hModifier.fBaseMana)
		end
	end
	function CDOTA_BaseNPC:IsRoshan()
		return self:GetUnitName() == "wave_55"
	end
	function CDOTA_BaseNPC:IsGoldWave()
		return self:GetUnitName() == "wave_gold" or self:GetUnitName() == "wave_goldx3"
	end
	function CDOTA_BaseNPC:SetWaveTag(tag)
		self.b_wave_tage = tag and true or false
	end
	function CDOTA_BaseNPC:IsWave()
		return self.b_wave_tage
	end
	function CDOTA_BaseNPC:RefreshAbilities()
		for i = 1, self:GetAbilityCount() do
			local ability = self:GetAbilityByIndex(i - 1)
			if ability ~= nil and FindValueByKey(REFRESH_EXCLUDE_ABILITIES, ability:GetAbilityName()) == false then
				ability:EndCooldown()
				ability:RefreshCharges()
			end
		end
	end
	function CDOTA_BaseNPC:RefreshItems()
		for i = 1, 16 do
			local item = self:GetItemInSlot(i - 1)
			if item ~= nil and FindValueByKey(REFRESH_EXCLUDE_ITEMS, item:GetAbilityName()) == false then
				item:EndCooldown()
			end
		end
	end
	function CDOTABaseAbility:IsChargeable()
		return true
	end

	function CDOTABaseAbility:GetMaxCharges()
		return self.max_charges or 1
	end

	function CDOTABaseAbility:AddMaxCharges(max_charges)
		self:SetMaxCharges(self:GetMaxCharges() + max_charges)
	end

	function CDOTABaseAbility:AddCharges(iCharges)
		local hCaster = self:GetCaster()
		local iOldCharges = self:GetCharges()
		if iOldCharges + iCharges >= self:GetMaxCharges() then
			iCharges = self:GetMaxCharges() - iOldCharges
		end
		if iCharges > 0 then
			self:EndCooldown()
			local hModifier = hCaster:FindModifierByNameAndAbility("modifier_charges", self)
			if IsValid(hModifier) then
				hModifier:SetStackCount(iOldCharges + iCharges)
				if hModifier:GetStackCount() >= self:GetMaxCharges() then
					hModifier:StartIntervalThink(-1)
					hModifier:SetDuration(-1, true)
				end
			end
		end
	end

	function CDOTABaseAbility:GetCharges()
		local hCaster = self:GetCaster()
		local hModifier = hCaster:FindModifierByNameAndAbility("modifier_charges", self)
		if IsValid(hModifier) then
			return hModifier:GetStackCount()
		else
			if self:IsCooldownReady() then
				return 1
			else
				return 0
			end
		end
	end

	function CDOTABaseAbility:SetMaxCharges(max_charges, charge_restore_time)
		if self:IsChargeable() == false then
			return
		end

		self.max_charges = math.max(1, math.floor(max_charges))

		local hCaster = self:GetCaster()
		local params = {
			max_charges = max_charges,
			charge_restore_time = charge_restore_time,
		}
		local hModifier = hCaster:FindModifierByNameAndAbility("modifier_charges", self)
		if IsValid(hModifier) then
			hModifier:OnRefresh(params)
		else
			hCaster:AddNewModifier(hCaster, self, "modifier_charges", params)
		end
	end
	function CDOTA_BaseNPC:GetRebornTimes()
		return self:HasModifier("modifier_reborn") and self:FindModifierByName("modifier_reborn"):GetStackCount() or 0
	end
	function CDOTA_BaseNPC:GetScepterLevel()
		return (self:HasModifier("modifier_reborn") and self:HasScepter()) and self:GetRebornTimes() or 0
	end

	function CDOTA_BaseNPC:GetSource()
		if self:IsSummoned() or self:IsClone() or self:IsIllusion() then
			return IsValid(self:GetSummoner()) and self:GetSummoner() or self
		end
		return self
	end
	function CDOTA_BaseNPC:IsRoundCreep()
		return self:HasModifier("modifier_round")
	end
	if CDOTA_BaseNPC.AddActivityModifier_Engine == nil then
		CDOTA_BaseNPC.AddActivityModifier_Engine = CDOTA_BaseNPC.AddActivityModifier
	end
	---@private
	function CDOTA_BaseNPC:_updateActivityModifier()
		if self._tActivityModifiers == nil then self._tActivityModifiers = {} end

		self:ClearActivityModifiers()

		for i = #self._tActivityModifiers, 1, -1 do
			self:AddActivityModifier_Engine(self._tActivityModifiers[i])
		end
	end

	function CDOTA_BaseNPC:AddActivityModifier(sName)
		if self._tActivityModifiers == nil then self._tActivityModifiers = {} end

		table.insert(self._tActivityModifiers, sName)

		self:_updateActivityModifier(self)
	end

	function CDOTA_BaseNPC:RemoveActivityModifier(sName)
		if self._tActivityModifiers == nil then self._tActivityModifiers = {} end

		ArrayRemove(self._tActivityModifiers, sName)

		self:_updateActivityModifier(self)
	end

	---获取附着点位置
	function CDOTA_BaseNPC:GetAttachmentPosition(sAttach)
		return self:GetAttachmentOrigin(self:ScriptLookupAttachment(sAttach))
	end

	---传送
	function CDOTA_BaseNPC:Teleport(vPosition, bInterruptMotion)
		if not self:IsRooted() then
			FindClearSpaceForUnit(hUnit, vPosition, bInterruptMotion)
		end
	end

	---获取信使
	function CDOTA_BaseNPC:GetCourier()
		return self._hCourier
	end

	---是否是信使
	function CDOTA_BaseNPC:IsCourier()
		return self:GetUnitName() == "ji"
	end
end

Hashtables = Hashtables or {}
function CreateHashtable(table)
	local new_hastable = {}
	local index = 1
	while Hashtables[index] ~= nil do
		index = index + 1
	end
	if table ~= nil then
		Hashtables[index] = table
	else
		Hashtables[index] = new_hastable
	end

	return Hashtables[index], index
end
function RemoveHashtable(hastable_or_index)
	local index
	if type(hastable_or_index) == "number" then
		index = hastable_or_index
	else
		index = GetHashtableIndex(hastable_or_index) or 0
	end
	Hashtables[index] = nil
end
function GetHashtableIndex(hastable)
	if hastable == nil then return nil end
	for index, h in pairs(Hashtables) do
		if h == hastable then
			return index
		end
	end
	return nil
end
function GetHashtableByIndex(index)
	return Hashtables[index]
end
function HashtableCount()
	local n = 0
	for index, h in pairs(Hashtables) do
		n = n + 1
	end
	return n
end
function GetRespawnPosition()
	local tEnt = Entities:FindAllByClassname("info_player_start_goodguys")
	return tEnt[1]:GetAbsOrigin()
end
function GetDayTime()
	local flTime = GameRules:GetTimeOfDay()
	local iHour, iMin = math.modf(flTime / (1 / 24))
	iMin = iMin * 60
	return iHour, iMin
end
--矢量夹角
function AngleBetween(v1, v2)
	local sin = v1.x * v2.y - v2.x * v1.y;
	local cos = v1.x * v2.x + v1.y * v2.y;
	local a = math.atan2(sin, cos) * (180 / math.pi)
	local sign = v1:Cross(v2):Normalized():Dot(v1:Normalized():Cross(v2:Normalized()))
	return a * sign
end
---计算距离
function CalculateDistance(ent1, ent2, b3D)
	if ent1 == nil or ent2 == nil then return 0 end
	local pos1 = ent1
	local pos2 = ent2
	if ent1.GetAbsOrigin then pos1 = ent1:GetAbsOrigin() end
	if ent2.GetAbsOrigin then pos2 = ent2:GetAbsOrigin() end
	local vector = (pos1 - pos2)
	if b3D then
		return vector:Length()
	else
		return vector:Length2D()
	end
end
---计算方向
function CalculateDirection(ent1, ent2)
	if ent1 == nil or ent2 == nil then return vec3_invalid end
	local pos1 = ent1
	local pos2 = ent2
	if ent1.GetAbsOrigin then pos1 = ent1:GetAbsOrigin() end
	if ent2.GetAbsOrigin then pos2 = ent2:GetAbsOrigin() end
	local direction = pos1 - pos2
	direction.z = 0
	return direction:Normalized()
end
-- 间隔循环
function ForInterval(flInterval, funcCallback)
	GameRules:GetGameModeEntity():GameTimer(0, function()
		if funcCallback() == true then
			return
		end
		return flInterval
	end)
end