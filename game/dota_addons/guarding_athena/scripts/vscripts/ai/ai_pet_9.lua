require( "ai/ai_core" )

function Spawn( entityKeyValues )
	if not IsServer() then
		return
	end

	if thisEntity == nil then
		return
	end

	tAbility = {
		{hAbility = thisEntity:FindAbilityByName( "pet_9_1" ), fCondition = EnemyCount, args = {1}, fAction = CastTarget},
		{hAbility = thisEntity:FindAbilityByName( "pet_9_2" ), fCondition = EnemyCount, args = {1}, fAction = CastNoTarget},
		{hAbility = thisEntity:FindAbilityByName( "pet_9_3" ), fCondition = EnemyCount, args = {1}, fAction = CastTarget},
	}

	thisEntity:GameTimer(0, Think)
end

function Think()
	if not thisEntity:IsAlive() then return -1 end

	local hAbilityInfo = GetRandomCastableAbility(thisEntity, tAbility, true)
	if hAbilityInfo then
		if hAbilityInfo.hAbility:GetAbilityName() == "pet_9_2" then
			hAbilityInfo.fAction(thisEntity, hAbilityInfo.hAbility)
		else
			local hTarget = StrongestEnemyInRange( thisEntity, hAbilityInfo.hAbility:GetCastRange(thisEntity:GetAbsOrigin(), nil) )
			if IsValid(hTarget) then
				hAbilityInfo.fAction(thisEntity, hAbilityInfo.hAbility, hTarget)
			end
		end
	end
	return 1
end

function EnemyCount(hAbility, iCount)
	local flCastRange = hAbility:GetCastRange(thisEntity:GetAbsOrigin(), nil)
	local tTargets = FindUnitsInRadiusWithAbility(thisEntity, thisEntity:GetAbsOrigin(), thisEntity:GetAcquisitionRange(), hAbility)
	if #tTargets >= iCount then
		return true
	end
	return false
end