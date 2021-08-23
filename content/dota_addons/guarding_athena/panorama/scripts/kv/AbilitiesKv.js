GameUI.CustomUIConfig().AbilitiesKv = {
	"Version": 1,
	"anneal": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "chaos_knight_chaos_strike",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"MaxLevel": 1,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 0,
		"Modifiers": {
			"modifier_anneal": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttacked": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero.lua",
						"Function": "Anneal",
						"DamageTaken": "%attack_damage",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_MISS_PERCENTAGE": 10,
				},
				"States": {
					"MODIFIER_STATE_NO_HEALTH_BAR": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "TowerCreated",
					},
				},
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "TowerTeleport",
					},
				},
				"ThinkInterval": 0.1,
				"OnDeath": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "TowerReborn",
					},
				},
			},
		},
	},
	"athena_heal": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "enchantress_natures_attendants",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"AbilityCooldown": "%cooldown",
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_huskar.vsndevts",
			"particle": "particles/units/athena/athena_immune.vpcf",
		},
		"Modifiers": {
			"modifier_athena_heal": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttacked": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "AthenaOnAttacked",
					},
				},
				"States": {
					"MODIFIER_STATE_LOW_ATTACK_PRIORITY": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_UNIT_COLLISION": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Aura": "modifier_athena_heal_AI",
				"Aura_Radius": 2000,
				"Aura_Teams": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
				"Aura_Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
			},
			"modifier_athena_heal_2": {
				"States": {
					"MODIFIER_STATE_INVULNERABLE": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Duration": 60,
				"EffectName": "particles/units/athena/athena_invulnerable.vpcf",
				"EffectAttachType": "attach_origin",
			},
			"modifier_athena_heal_3": {
				"States": {
					"MODIFIER_STATE_MAGIC_IMMUNE": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Duration": 60,
				"EffectName": "particles/units/athena/athena_immune.vpcf",
				"EffectAttachType": "attach_origin",
			},
			"modifier_athena_heal_AI": {
				"IsHidden": 1,
				"OnTakeDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/general/athena_ability.lua",
						"Function": "AthenaHeal",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"health": 80,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"mana": 16,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 30,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"cooldown": 120,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"radius": 2000,
			},
		},
		"FightRecapLevel": 1,
	},
	"athena_guard": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "lich_frost_armor",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"AbilityCastPoint": 0.0,
		"AbilityCooldown": "%cooldown",
		"precache": {
			"particle": "particles/units/heroes/hero_lich/lich_frost_armor.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_lich.vsndevts",
		},
		"Modifiers": {
			"modifier_athena_guard_buff": {
				"Passive": 0,
				"Properties": {
				},
				"IsHidden": 0,
			},
			"modifier_athena_guard": {
				"Aura": "modifier_athena_guard_aura",
				"Aura_Radius": 2000,
				"Aura_Teams": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
				"Aura_Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
				"IsHidden": 1,
				"Passive": 1,
			},
			"modifier_athena_guard_aura": {
				"IsHidden": 1,
				"OnTakeDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/general/athena_ability.lua",
						"Function": "AthenaGuard",
					},
				},
			},
			"modifier_athena_guard_armor_fix": {
				"Properties": {
					"MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS": -1,
				},
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "AthenaArmorFix",
					},
				},
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT",
				"ThinkInterval": 0.1,
				"IsDebuff": 1,
				"IsHidden": 1,
			},
			"modifier_athena_guard_armor_fix_aura": {
				"Passive": 1,
				"IsDebuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"reduce": -25,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"armor": 10,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"def": 10,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"duration": 30,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"cooldown": 180,
			},
		},
		"FightRecapLevel": 1,
	},
	"ciba": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "meepo_divided_we_stand",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"precache": {
			"particle": "particles/econ/courier/courier_greevil_naked/courier_greevil_naked_ambient_3.vpcf",
		},
		"Modifiers": {
			"modifier_ciba": {
				"Passive": 1,
				"OnCreated": {
					"AttachEffect": {
						"EffectName": "particles/econ/courier/courier_greevil_naked/courier_greevil_naked_ambient_3.vpcf",
						"Target": "CASTER",
						"EffectAttachType": "follow_origin",
					},
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "Ciba",
					},
				},
				"OverrideAnimation": "ACT_DOTA_FLAIL",
				"States": {
					"MODIFIER_STATE_INVULNERABLE": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
	},
	"force_rush": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "legion_commander_press_the_attack",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"MaxLevel": 5,
		"precache": {
			"particle": "particles/units/heroes/hero_legion_commander/legion_commander_press.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_legion_commander.vsndevts",
		},
		"Modifiers": {
			"modifier_courage": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttacked": {
					"Random": {
						"Chance": 15,
						"OnSuccess": {
							"ApplyModifier": {
								"ModifierName": "modifier_courage_buff",
								"Target": "TARGET",
								"Duration": 6,
							},
						},
					},
				},
			},
			"modifier_courage_buff": {
				"IsHidden": 1,
				"Properties": {
					"MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT": "%heal",
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%attackspeed",
				},
				"OnCreated": {
					"AttachEffect": {
						"Target": "CASTER",
						"EffectName": "particles/units/heroes/hero_legion_commander/legion_commander_press.vpcf",
						"EffectAttachType": "attach_origin",
					},
					"FireSound": {
						"Target": "TARGET",
						"EffectName": "Hero_LegionCommander.PressTheAttack",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"heal": "1000 1500 2000 2500 5000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "200 300 400 500 1000",
			},
		},
	},
	"courage": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "legion_commander_moment_of_courage",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"MaxLevel": 5,
		"precache": {
			"particle": "particles/units/heroes/hero_legion_commander/legion_commander_courage_hit.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_legion_commander.vsndevts",
		},
		"Modifiers": {
			"modifier_courage": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"Heal": {
						"Target": "CASTER",
						"HealAmount": "%heal",
					},
					"AttachEffect": {
						"EffectName": "particles/units/heroes/hero_legion_commander/legion_commander_courage_hit.vpcf",
						"EffectAttachType": "follow_origin",
						"Target": "CASTER",
					},
					"FireSound": {
						"EffectName": "Hero_LegionCommander.Courage",
						"Target": "CASTER",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 100,
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": 100,
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"heal": "1000 2000 3000 4000 8000",
			},
		},
	},
	"life_absorb": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/life_absorb",
		"AbilityTextureName": "death_prophet_spirit_siphon",
		"MaxLevel": 5,
		"AbilityCastRange": 900,
		"AbilityCooldown": 15,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "500 1000 1500 2000 4000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"heal": 1000,
			},
		},
	},
	"wolf_critical": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wolf_critical",
		"AbilityTextureName": "lycan_summon_wolves_critical_strike",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"chance": "20 30 40 50 100",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"critical": "250 300 350 400 800",
			},
		},
	},
	"wolf_wound": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wolf_wound",
		"AbilityTextureName": "ursa_fury_swipes",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"bonus_reset_time": 15,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_reset_time_roshan": 6,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage_per_stack": "200 400 600 800 1000",
			},
		},
	},
	"wolf_invisible": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wolf_invisible",
		"AbilityTextureName": "lycan_summon_wolves_invisibility",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
	},
	"jugg_attack": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/jugg_attack",
		"AbilityTextureName": "juggernaut_omni_slash",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"bonus_attack_speed": "100 200 300 400 500",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"evasion": "30 40 50 60 70",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"critical": "200 300 400 500 600",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"chance": 25,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"armor_reduce": -150,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"duration": 2,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"duration": 2,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"duration": 2,
			},
		},
	},
	"reborn": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "night_stalker_hunter_in_the_night",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"MaxLevel": 1,
		"precache": {
			"particle": "particles/skills/reborn.vpcf",
		},
		"Modifiers": {
			"modifier_reborn": {
				"Passive": 1,
				"OnCreated": {
					"AttachEffect": {
						"EffectName": "particles/skills/reborn.vpcf",
						"EffectAttachType": "follow_origin",
						"Target": "CASTER",
					},
				},
				"States": {
					"MODIFIER_STATE_NO_HEALTH_BAR": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_INVULNERABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_UNSELECTABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_DISARMED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_COMMAND_RESTRICTED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
		"FightRecapLevel": 1,
	},
	"athena_reborn": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "athena_reborn",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"MaxLevel": 1,
		"precache": {
			"particle": "particles/units/athena/athena_reborn.vpcf",
		},
		"Modifiers": {
			"modifier_athena_reborn": {
				"Passive": 0,
				"States": {
					"MODIFIER_STATE_NO_HEALTH_BAR": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_INVULNERABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_UNSELECTABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_DISARMED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_COMMAND_RESTRICTED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"EffectName": "particles/units/athena/athena_reborn.vpcf",
				"EffectAttachType": "attach_origin",
				"Duration": 60,
			},
		},
	},
	"bomb_suicide": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/bomb_suicide",
		"AbilityTextureName": "techies_suicide",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "6000 8000 10000 12000 24000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
		},
	},
	"soul_tremble": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/soul_tremble",
		"AbilityTextureName": "bane_enfeeble",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 600,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 30,
		"AbilityManaCost": 100,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"reduce": -500,
			},
		},
	},
	"soul_hurt": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/soul_hurt",
		"AbilityTextureName": "bane_brain_sap",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"rate": "0.1 0.15 0.2 0.25 0.5",
			},
		},
	},
	"fur_dance": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "furion_wrath_of_nature",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"MaxLevel": 5,
		"AbilityCooldown": 20,
		"precache": {
			"particle": "particles/units/heroes/hero_furion/furion_tnt_rain.vpcf",
		},
		"Modifiers": {
			"modifier_fur_dance": {
				"Passive": 1,
				"OnTakeDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_28.lua",
						"Function": "FurDanceAI",
					},
				},
			},
			"modifier_fur_dance_buff": {
				"States": {
					"MODIFIER_STATE_MAGIC_IMMUNE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_DISARMED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_ROOTED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Properties": {
					"MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE": "%regen",
				},
				"Duration": "%duration",
				"EffectName": "particles/units/heroes/hero_furion/furion_tnt_rain.vpcf",
				"EffectAttachType": "attach_origin",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"regen": "20 40 60 80 100",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": "5 6 7 8 9",
			},
		},
		"FightRecapLevel": 1,
	},
	"xixue": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "terrorblade_metamorphosis_alt1",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"MaxLevel": 5,
		"Modifiers": {
			"modifier_xixue": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"Lifesteal": {
						"Target": "CASTER",
						"LifestealPercent": "%lifesteal",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%attackspeed",
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": 50,
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"lifesteal": "200 300 400 500 1000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "100 200 300 400 800",
			},
		},
	},
	"tb_critical": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "phantom_assassin_coup_de_grace",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"MaxLevel": 5,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_phantom_assassin.vsndevts",
		},
		"Modifiers": {
			"modifier_coup_de_grace_datadriven": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackStart": {
					"RemoveModifier": {
						"ModifierName": "modifier_coup_de_grace_crit_datadriven",
						"Target": "CASTER",
					},
					"Random": {
						"Chance": "%chance",
						"PseudoRandom": "DOTA_PSEUDO_RANDOM_PHANTOMASSASSIN_CRIT",
						"OnSuccess": {
							"ApplyModifier": {
								"ModifierName": "modifier_coup_de_grace_crit_datadriven",
								"Target": "CASTER",
							},
						},
					},
				},
			},
			"modifier_coup_de_grace_crit_datadriven": {
				"IsHidden": 1,
				"Properties": {
					"MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE": "%critical",
				},
				"OnAttackLanded": {
					"RemoveModifier": {
						"ModifierName": "modifier_coup_de_grace_crit_datadriven",
						"Target": "CASTER",
					},
					"FireSound": {
						"EffectName": "Hero_PhantomAssassin.CoupDeGrace",
						"Target": "TARGET",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"chance": "20 25 30 35 50",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"critical": "700 800 900 1000 1200",
			},
		},
	},
	"chouxue": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "terrorblade_sunder_alt1",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCooldown": 40,
		"AbilityManaCost": 1000,
		"AbilityCastRange": 900,
		"precache": {
			"particle": "particles/units/heroes/hero_terrorblade/terrorblade_sunder.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_terrorblade.vsndevts",
		},
		"OnSpellStart": {
			"Damage": {
				"Target": {
					"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
					"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
					"Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
					"Center": "CASTER",
					"Radius": 600,
				},
				"Type": "DAMAGE_TYPE_PURE",
				"Damage": "%damage",
				"CurrentHealthPercentBasedDamage": 1,
			},
			"FireSound": {
				"EffectName": "Hero_Terrorblade.Sunder.Cast",
				"Target": "CASTER",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_unit.lua",
				"Function": "Sunder",
				"Target": {
					"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
					"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
					"Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
					"Center": "CASTER",
					"Radius": 600,
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "75 80 85 90 95",
			},
		},
	},
	"xiaolan": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "antimage_mana_break",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"MaxLevel": 5,
		"Modifiers": {
			"modifier_xiaolan": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "xiaolan",
						"Target": "TARGET",
						"Mana": "%mana",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%attackspeed",
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": 20,
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"mana": "200 400 600 800 1600",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "100 200 300 400 500",
			},
		},
	},
	"siling_attack": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "necronomicon_warrior_mana_burn",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"MaxLevel": 5,
		"Modifiers": {
			"modifier_siling_attack": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_30.lua",
						"Function": "LifeSteal",
					},
				},
				"Properties": {
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"percent": "2 3 4 5 6",
			},
		},
	},
	"siling_speed": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "necronomicon_warrior_sight",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"MaxLevel": 5,
		"Modifiers": {
			"modifier_siling_speed": {
				"Passive": 1,
				"IsHidden": 1,
				"OnTakeDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_30.lua",
						"Function": "DeathWish",
					},
				},
				"Properties": {
				},
			},
			"modifier_siling_speed_buff": {
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%attackspeed",
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": "%movespeed",
				},
				"IsHidden": 0,
				"IsBuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "10 20 30 40 50",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "5 10 15 20 25",
			},
		},
	},
	"siling_death": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "necronomicon_warrior_last_will",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"MaxLevel": 5,
		"precache": {
			"particle": "particles/items_fx/necronomicon_warrior_last_will.vpcf",
		},
		"Modifiers": {
			"modifier_siling_death": {
				"Passive": 1,
				"IsHidden": 1,
				"OnDeath": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_30.lua",
						"Function": "OnDeath",
					},
				},
				"Properties": {
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "15000 30000 45000 60000 75000",
			},
		},
	},
	"jianjia": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "tidehunter_gush",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"MaxLevel": 5,
		"Modifiers": {
			"modifier_jianjia": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"ApplyModifier": {
						"ModifierName": "modifier_jianjia_debuff",
						"Target": "TARGET",
						"Duration": 6,
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 50,
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": 20,
				},
			},
			"modifier_jianjia_debuff": {
				"IsDebuff": 1,
				"Properties": {
					"MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS": "%armor",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"armor": "-30 -60 -90 -120 -150",
			},
		},
	},
	"chenmo": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "naga_siren_song_of_the_siren",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"MaxLevel": 5,
		"AbilityCooldown": 16,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_naga_siren.vsndevts",
			"particle": "particles/units/heroes/hero_siren/naga_siren_siren_song_cast.vpcf",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"Target": {
					"Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
					"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
					"Center": "CASTER",
					"Radius": "%radius",
				},
				"ModifierName": "modifier_siren_silence",
				"Duration": "%duration",
			},
			"FireEffect": {
				"Target": "CASTER",
				"EffectName": "particles/units/heroes/hero_siren/naga_siren_siren_song_cast.vpcf",
				"EffectAttachType": "attach_origin",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_NagaSiren.SongOfTheSiren",
			},
		},
		"Modifiers": {
			"modifier_siren_silence": {
				"IsDebuff": 1,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%speed",
				},
				"States": {
					"MODIFIER_STATE_SILENCED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"speed": "-300 -500 -700 -900 -1100",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 1800,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": "4 5 6 7 8",
			},
		},
	},
	"fuhuosishi": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/fuhuosishi",
		"AbilityTextureName": "dark_troll_warlord_raise_dead",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 600,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 30,
		"AbilityManaCost": 0,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": "600 600 600 600 600",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": "60 60 60 60 60",
			},
		},
	},
	"mana_burn": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "nyx_assassin_mana_burn",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"MaxLevel": 1,
		"AbilityCastPoint": 0.3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCooldown": "16 15 14 13 12",
		"AbilityManaCost": 0,
		"AbilityCastRange": 700,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_nyx_assassin.vsndevts",
			"particle": "particles/units/heroes/hero_nyx_assassin/nyx_assassin_mana_burn.vpcf",
		},
		"Modifiers": {
			"modifier_fuhuosishi_clone": {
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_35.lua",
						"Function": "ManaBurn",
					},
				},
				"Passive": 1,
				"IsHidden": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"mana": "2 3 4 5 6",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"cooldown": "16 15 14 13 12",
			},
		},
	},
	"roshan_stun": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/roshan_stun",
		"AbilityTextureName": "roshan_bash",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "20000 30000 40000 50000 100000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"chance": "10 12 14 16 20",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"duration": "1.6 1.7 1.8 1.9 2.0",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"cooldown": "8 7 6 5 4",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "50 100 150 200 250",
			},
		},
	},
	"slardar_stun": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/slardar_stun",
		"AbilityTextureName": "slardar_bash",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "18000 26000 34000 42000 84000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"chance": "10 12 14 16 20",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": "4 5 6 7 8",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"stats": -2700,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "50 100 150 200 250",
			},
		},
	},
	"slardar_crush": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/slardar_crush",
		"AbilityTextureName": "slardar_slithereen_crush",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastPoint": 0.35,
		"AbilityCooldown": "14 13 12 11 10",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "30000 60000 90000 120000 240000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": "400 400 400 400 400",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"duration": "1.2 1.4 1.6 1.8 2.0",
			},
		},
	},
	"slardar_run": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/slardar_run",
		"AbilityTextureName": "slardar_sprint",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
	},
	"roshan_strike": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/roshan_strike",
		"AbilityTextureName": "roshan_slam",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 15,
		"AbilityManaCost": 60,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "40000 80000 120000 160000 320000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": "450 450 450 450 450",
			},
		},
	},
	"roshan_shock": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/roshan_shock",
		"AbilityTextureName": "roshan_halloween_angry",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 15,
		"AbilityManaCost": 60,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "100 200 300 400 800",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": "600 600 600 600 600",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"movespeed": -1500,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"shock_duration": "2 3 4 5 6",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"duration": "10 10 10 10 10",
			},
		},
	},
	"mubei": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/mubei",
		"AbilityTextureName": "undying_tombstone_alt",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 600,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 60,
		"AbilityManaCost": 0,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"heal": "1 2 3 4 5",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": "600 600 600 600 600",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": "20 18 16 14 10",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"cooldown": "60 50 40 30 20",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"health": "0 200000 400000 600000 800000",
			},
		},
	},
	"shiwangchouxue": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/shiwangchouxue",
		"AbilityTextureName": "undying_decay",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_UNDYING_DECAY",
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 3,
		"AbilityManaCost": 100,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "11 14 17 20 25",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"heal": "11 14 17 20 25",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": "800 800 800 800",
			},
		},
	},
	"fulan": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/fulan",
		"AbilityTextureName": "greevil_rot",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "50000 100000 150000 200000 250000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": "400 400 400 400 400",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"movespeed": -700,
			},
		},
	},
	"boss_clear": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/boss_clear",
		"AbilityTextureName": "chen_test_of_faith_teleport",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"interval": 5,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"duration": 1.5,
			},
		},
	},
	"boss_blink": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/boss_blink",
		"AbilityTextureName": "abyssal_underlord_dark_rift",
		"MaxLevel": 5,
		"AbilityCooldown": "10 9 8 7 6",
		"AbilityChannelTime": "2.0 1.8 1.6 1.4 1.2",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"cooldown": "10 9 8 7 6",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": 2,
			},
		},
	},
	"lightning_attack": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/lightning_attack",
		"AbilityTextureName": "zuus_arc_lightning",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 900,
		"AbilityCastPoint": 0.2,
		"AbilityCooldown": 1.25,
		"AbilityManaCost": 200,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "20000 40000 60000 80000 160000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": "600 600 600 600 600",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"jump_count": "3 4 5 6 8",
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"jump_delay": "0.25 0.25 0.25 0.25 0.25",
			},
		},
	},
	"lightning_crash": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/lightning_crash",
		"AbilityTextureName": "zuus_lightning_bolt",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 900,
		"AbilityCastPoint": 0.2,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "40000 80000 120000 160000 320000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"att_rate": "10 13 16 19 25",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"def_rate": "5 8 11 14 20",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"miss": "50 60 70 80 90",
			},
		},
	},
	"thunder_wrath": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/thunder_wrath",
		"AbilityTextureName": "zuus_thundergods_wrath_alt1",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.4,
		"AbilityCooldown": 25,
		"AbilityManaCost": 200,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "100000 200000 300000 400000 800000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": "6 8 10 12 16",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": -8400,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"movespeed": -1000,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"cooldown_increase": 20,
			},
		},
	},
	"god_body": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/god_body",
		"AbilityTextureName": "zuus_static_field_alt1",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.1,
		"AbilityCooldown": 2,
		"AbilityManaCost": 200,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"max_damage": "12 10 8 6 4",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"regen": "2 3 4 5 6",
			},
		},
	},
	"electrostatic_field": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/electrostatic_field",
		"AbilityTextureName": "zuus_static_field",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.1,
		"AbilityCooldown": 25,
		"AbilityManaCost": 200,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"max_damage": "25 20 15 10 5",
			},
		},
	},
	"thunder_cloud": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/thunder_cloud",
		"AbilityTextureName": "zuus_lightning_bolt_immortal",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.1,
		"AbilityCooldown": 30,
		"AbilityManaCost": 200,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "8000 16000 24000 32000 64000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": "5 6 7 8 10",
			},
		},
	},
	"autor_buff": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "night_stalker_hunter_in_the_night",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
		"precache": {
			"particle": "particles/econ/items/zeus/arcana_chariot/zeus_arcana_chariot.vpcf",
		},
		"Modifiers": {
			"modifier_autor": {
				"Passive": 1,
				"IsHidden": 1,
				"OnCreated": {
					"AttachEffect": {
						"EffectName": "particles/econ/items/zeus/arcana_chariot/zeus_arcana_chariot.vpcf",
						"Target": "CASTER",
						"EffectAttachType": "follow_origin",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT": 50,
					"MODIFIER_PROPERTY_MANA_REGEN_CONSTANT": 25,
					"MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_CONSTANT": -50,
				},
			},
		},
	},
	"wing": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "night_stalker_hunter_in_the_night",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
		"Modifiers": {
			"modifier_wing": {
				"Passive": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "ApplyWingsCooldown",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": 30,
					"MODIFIER_PROPERTY_STATS_STRENGTH_BONUS": 100,
					"MODIFIER_PROPERTY_STATS_AGILITY_BONUS": 100,
					"MODIFIER_PROPERTY_STATS_INTELLECT_BONUS": 100,
					"MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE": -20,
				},
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT | MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE",
			},
		},
	},
	"wing_gold": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "night_stalker_hunter_in_the_night",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
		"precache": {
			"particle": "particles/skills/wing_sky_gold.vpcf",
		},
		"Modifiers": {
			"modifier_wing": {
				"Passive": 1,
				"OnCreated": {
					"AttachEffect": {
						"EffectName": "particles/skills/wing_sky_gold.vpcf",
						"Target": "CASTER",
						"EffectAttachType": "follow_origin",
					},
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "ApplyWingsCooldown",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": 30,
					"MODIFIER_PROPERTY_STATS_STRENGTH_BONUS": 100,
					"MODIFIER_PROPERTY_STATS_AGILITY_BONUS": 100,
					"MODIFIER_PROPERTY_STATS_INTELLECT_BONUS": 100,
					"MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE": -20,
				},
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT | MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE",
			},
		},
	},
	"wing_gold_sf": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "night_stalker_hunter_in_the_night",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
		"precache": {
			"particle": "particles/wings/wing_sf_goldsky_gold.vpcf",
		},
		"Modifiers": {
			"modifier_wing": {
				"Passive": 1,
				"OnCreated": {
					"AttachEffect": {
						"EffectName": "particles/wings/wing_sf_goldsky_gold.vpcf",
						"Target": "CASTER",
						"EffectAttachType": "follow_origin",
					},
					"RunScript": {
						"Function": "ApplyWingsCooldown",
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": 30,
					"MODIFIER_PROPERTY_STATS_STRENGTH_BONUS": 100,
					"MODIFIER_PROPERTY_STATS_AGILITY_BONUS": 100,
					"MODIFIER_PROPERTY_STATS_INTELLECT_BONUS": 100,
					"MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE": -20,
				},
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT | MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE",
			},
		},
	},
	"singlehero": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "bloodseeker_thirst",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
		"Modifiers": {
			"modifier_singlehero": {
				"Passive": 1,
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": 20,
					"MODIFIER_PROPERTY_STATS_STRENGTH_BONUS": 20,
					"MODIFIER_PROPERTY_STATS_AGILITY_BONUS": 20,
					"MODIFIER_PROPERTY_STATS_INTELLECT_BONUS": 20,
					"MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE": 20,
				},
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero.lua",
						"Function": "SingleHero",
					},
				},
			},
		},
	},
	"guarding_1": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "omniknight_guardian_angel",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
		"Modifiers": {
			"modifier_guarding_1": {
				"Passive": 1,
				"Properties": {
					"MODIFIER_PROPERTY_STATS_STRENGTH_BONUS": 50,
					"MODIFIER_PROPERTY_STATS_AGILITY_BONUS": 50,
					"MODIFIER_PROPERTY_STATS_INTELLECT_BONUS": 50,
				},
			},
		},
	},
	"guarding_2": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "omniknight_guardian_angel",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
		"Modifiers": {
			"modifier_guarding_2": {
				"Passive": 1,
				"Properties": {
					"MODIFIER_PROPERTY_STATS_STRENGTH_BONUS": 100,
					"MODIFIER_PROPERTY_STATS_AGILITY_BONUS": 100,
					"MODIFIER_PROPERTY_STATS_INTELLECT_BONUS": 100,
				},
			},
		},
	},
	"guarding_3": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "omniknight_guardian_angel",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
		"Modifiers": {
			"modifier_guarding_3": {
				"Passive": 1,
				"Properties": {
					"MODIFIER_PROPERTY_STATS_STRENGTH_BONUS": 200,
					"MODIFIER_PROPERTY_STATS_AGILITY_BONUS": 200,
					"MODIFIER_PROPERTY_STATS_INTELLECT_BONUS": 200,
				},
			},
		},
	},
	"guarding_4": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "omniknight_guardian_angel",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
		"Modifiers": {
			"modifier_guarding_4": {
				"Passive": 1,
				"Properties": {
					"MODIFIER_PROPERTY_STATS_STRENGTH_BONUS": 400,
					"MODIFIER_PROPERTY_STATS_AGILITY_BONUS": 400,
					"MODIFIER_PROPERTY_STATS_INTELLECT_BONUS": 400,
				},
			},
		},
	},
	"hell_beast_aura": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "kobold_taskmaster_speed_aura",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"Modifiers": {
			"modifier_beast_aura": {
				"Passive": 1,
				"IsHidden": 1,
				"Aura": "modifier_beast_aura_buff",
				"Aura_Radius": 500,
				"Aura_Types": "DOTA_UNIT_TARGET_ALL",
				"Aura_Teams": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
				"Aura_Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
			},
			"modifier_beast_aura_buff": {
				"Properties": {
					"MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE": 50,
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 50,
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": 50,
				},
			},
		},
	},
	"boss_beat_old": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "polar_furbolg_ursa_warrior_thunder_clap",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCastPoint": 0.5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCooldown": 4,
		"AbilityManaCost": 60,
		"AbilityCastRange": 250,
		"precache": {
			"particle": "particles/units/heroes/hero_centaur/centaur_warstomp.vpcf",
			"soundfile": "soundevents/game_sounds_creeps.vsndevts",
		},
		"OnSpellStart": {
			"Stun": {
				"Duration": 0.1,
				"Target": "TARGET",
			},
			"AttachEffect": {
				"EffectName": "particles/units/heroes/hero_centaur/centaur_warstomp.vpcf",
				"Target": "TARGET",
				"EffectAttachType": "attach_origin",
			},
			"FireSound": {
				"EffectName": "n_creep_Ursa.Clap",
				"Target": "TARGET",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_unit.lua",
				"Function": "KvDamage",
				"damage": 5000,
			},
		},
		"Modifiers": {
			"modifier_jump_strike": {
				"Passive": 1,
				"IsHidden": 1,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 30,
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": 10,
				},
			},
		},
	},
	"boss_stone": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "neutral_spell_immunity",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"Modifiers": {
			"modifier_stone": {
				"Passive": 1,
				"IsHidden": 1,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 20,
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": 20,
					"MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS": "%resistance",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"resistance": 30,
			},
		},
	},
	"golem_skin": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/golem_skin",
		"AbilityTextureName": "modifier_magicimmune",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"mdef": "20 30 40 50 60",
			},
		},
	},
	"golem_spilt": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/golem_spilt",
		"AbilityTextureName": "mud_golem_rock_destroy",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
	},
	"troll_block": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "dragon_knight_dragon_tail",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_dragon_knight.vsndevts",
			"particle": "particles/econ/items/sven/sven_warcry_ti5/sven_warcry_shield_bash_blur.vpcf",
		},
		"Modifiers": {
			"modifier_troll_block": {
				"Passive": 1,
				"IsHidden": 1,
				"Properties": {
				},
				"OnTakeDamage": {
					"Random": {
						"OnSuccess": {
							"RemoveModifier": {
								"Target": "CASTER",
								"ModifierName": "modifier_troll_block",
							},
							"ApplyModifier": {
								"Target": "CASTER",
								"ModifierName": "modifier_troll_block_buff",
								"Duration": "%duration",
							},
							"Knockback": {
								"Target": {
									"Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
									"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
									"Center": "CASTER",
									"Radius": 200,
								},
								"Center": "CASTER",
								"Duration": 0.5,
								"Distance": 200,
								"IsFixedDistance": 0,
								"ShouldStun": 1,
							},
							"FireSound": {
								"Target": "CASTER",
								"EffectName": "Hero_DragonKnight.DragonTail.Target",
							},
						},
						"Chance": 30,
					},
				},
			},
			"modifier_troll_block_buff": {
				"Properties": {
					"MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE": "%block",
				},
				"OnDestroy": {
					"ApplyModifier": {
						"Target": "CASTER",
						"ModifierName": "modifier_troll_block_cooldown",
						"Duration": "%cooldown",
					},
				},
				"EffectName": "particles/econ/items/sven/sven_warcry_ti5/sven_warcry_shield_bash_blur.vpcf",
				"EffectAttachType": "follow_origin",
			},
			"modifier_troll_block_cooldown": {
				"OnDestroy": {
					"ApplyModifier": {
						"Target": "CASTER",
						"ModifierName": "modifier_troll_block",
					},
				},
				"IsHidden": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"block": "-40 -50 -60 -70 -80",
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"duration": "1.2 1.4 1.6 1.8 2.0",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"cooldown": 2,
			},
		},
	},
	"alien_parasitism": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "life_stealer_infest",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"Modifiers": {
			"modifier_alien_parasitism": {
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_2.lua",
						"Function": "AlienParasitismAI",
					},
				},
				"ThinkInterval": 0.1,
				"Passive": 1,
				"IsHidden": 1,
			},
			"modifier_alien_parasitism_buff": {
				"States": {
					"MODIFIER_STATE_NO_HEALTH_BAR": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_UNSELECTABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_INVULNERABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NOT_ON_MINIMAP_FOR_ENEMIES": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_UNIT_COLLISION": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_DISARMED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_2.lua",
						"Function": "AlienParasitism",
					},
				},
				"ThinkInterval": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "40 50 60 70 80",
			},
		},
	},
	"alien_parasitism_attack": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "broodmother_insatiable_hunger",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
		"Modifiers": {
			"modifier_alien_parasitism_attack": {
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_2.lua",
						"Function": "AlienParasitismAttack",
					},
				},
				"ThinkInterval": 0.1,
				"Passive": 1,
				"IsHidden": 1,
			},
			"modifier_alien_parasitism_attack_buff": {
				"States": {
					"MODIFIER_STATE_NO_HEALTH_BAR": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_UNSELECTABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_INVULNERABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NOT_ON_MINIMAP_FOR_ENEMIES": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_UNIT_COLLISION": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_DISARMED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "AlienParasitism",
					},
				},
				"ThinkInterval": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "1000 2000 3000 4000 5000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"count": "2 3 4 5 6",
			},
		},
	},
	"alien_line": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "wisp_tether",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_tinker.vsndevts",
		},
		"Modifiers": {
			"modifier_alien_line": {
				"OnTakeDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_2.lua",
						"Function": "AlienLine",
						"DamageTaken": "%attack_damage",
					},
				},
				"ThinkInterval": 0.1,
				"Passive": 1,
				"IsHidden": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"hp": "5 4 3 2 1",
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"damage": "2000 4000 6000 8000 10000",
			},
		},
	},
	"alien_split": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "enigma_demonic_conversion",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"Modifiers": {
			"modifier_alien_split": {
				"OnDeath": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_2.lua",
						"Function": "AlienSplit",
					},
				},
				"ThinkInterval": 0.1,
				"Passive": 1,
				"IsHidden": 1,
			},
			"modifier_alien_split_knockback": {
				"OnCreated": {
					"Knockback": {
						"Target": "TARGET",
						"Center": "CASTER",
						"Duration": 1,
						"Distance": 400,
						"Height": 250,
						"ShouldStun": 1,
					},
				},
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Duration": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"count": "2 3 4 5 6",
			},
		},
	},
	"alien_growth": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "enigma_malefice",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"Modifiers": {
			"modifier_alien_growth": {
				"ThinkInterval": 0.1,
				"Passive": 1,
				"IsHidden": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_2.lua",
						"Function": "AlienGrowth",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": "12 11 10 9 8",
			},
		},
	},
	"alien_blackhole": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "enigma_black_hole",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_enigma.vsndevts",
		},
		"Modifiers": {
			"modifier_alien_blackhole": {
				"ThinkInterval": 0.1,
				"Passive": 1,
				"IsHidden": 0,
				"OnDeath": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_2.lua",
						"Function": "AlienBlackHole",
					},
					"FireSound": {
						"Target": "CASTER",
						"EffectName": "Hero_Enigma.Black_Hole",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "20000 40000 60000 80000 90000",
			},
		},
	},
	"alien_obsidian_star": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "abaddon_aphotic_shield_alliance",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCooldown": 6,
		"AbilityCastRange": 900,
		"OnSpellStart": {
			"RunScript": {
				"Target": "POINT",
				"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_2.lua",
				"Function": "AlienObsidianStar",
			},
		},
		"Modifiers": {
			"modifier_alien_obsidian_star": {
				"ThinkInterval": 1,
				"Passive": 1,
				"IsHidden": 0,
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_2.lua",
						"Function": "AlienObsidianStarAI",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "10000 20000 30000 40000 50000",
			},
		},
	},
	"solar_lifesteal": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "night_stalker_hunter_in_the_night",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCooldown": 6,
		"AbilityCastRange": 900,
		"Modifiers": {
			"modifier_solar_lifesteal": {
				"ThinkInterval": 1,
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_3.lua",
						"Function": "SolarLifesteal",
					},
					"ApplyModifier": {
						"Target": "CASTER",
						"ModifierName": "modifier_solar_lifesteal_buff",
						"Duration": 12,
					},
				},
			},
			"modifier_solar_lifesteal_buff": {
				"IsHidden": 1,
				"Attributes": "MODIFIER_ATTRIBUTE_MULTIPLE",
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%attackspeed",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "20 40 60 80 100",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "10 15 20 25 30",
			},
		},
	},
	"solar_magic_fire": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "oracle_purifying_flames",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCooldown": 15,
		"AbilityCastRange": 900,
		"AbilityChannelTime": "%duration",
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_phoenix.vsndevts",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"Target": "TARGET",
				"ModifierName": "modifier_solar_magic_fire_debuff",
				"Duration": "%duration",
			},
			"FireSound": {
				"Target": "TARGET",
				"EffectName": "Hero_Phoenix.FireSpirits.Launch",
			},
		},
		"OnChannelInterrupted": {
			"RemoveModifier": {
				"Target": "TARGET",
				"ModifierName": "modifier_solar_magic_fire_debuff",
			},
		},
		"Modifiers": {
			"modifier_solar_magic_fire": {
				"ThinkInterval": 1,
				"Passive": 1,
				"IsHidden": 0,
				"States": {
				},
				"Properties": {
				},
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_3.lua",
						"Function": "SolarMagicFire",
					},
				},
			},
			"modifier_solar_magic_fire_debuff": {
				"ThinkInterval": 1,
				"Passive": 0,
				"IsHidden": 0,
				"States": {
				},
				"Properties": {
					"MODIFIER_PROPERTY_DISABLE_HEALING": 1,
				},
				"OnIntervalThink": {
					"Damage": {
						"Target": "TARGET",
						"Type": "DAMAGE_TYPE_MAGICAL",
						"Damage": "%damage",
					},
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_3.lua",
						"Function": "SolarMagicFireborken",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "10000 20000 30000 40000 50000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": "6 7 8 9 10",
			},
		},
	},
	"solar_noice_wave": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "bane_brain_sap",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCooldown": 20,
		"AbilityCastRange": 600,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_queenofpain.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_3.lua",
				"Function": "SolarNoiceWave",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_QueenOfPain.SonicWave",
			},
		},
		"Modifiers": {
			"modifier_solar_noice_wave": {
				"ThinkInterval": 1,
				"Passive": 1,
				"IsHidden": 0,
				"States": {
				},
				"Properties": {
				},
				"OnTakeDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_3.lua",
						"Function": "SolarNoiceWaveAI",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "40 50 60 70 80",
			},
		},
	},
	"ultrasonic": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "queenofpain_sonic_wave",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCooldown": 20,
		"AbilityCastRange": 600,
		"precache": {
			"particle": "particles/units/heroes/hero_queenofpain/queen_sonic_wave.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_queenofpain.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_34.lua",
				"Function": "Ultrasonic",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_QueenOfPain.SonicWave",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "50000 100000 150000 200000 250000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage_percent": 20,
			},
		},
	},
	"solar_barren_aura": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "night_stalker_darkness",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"Modifiers": {
			"modifier_solar_barren_aura": {
				"ThinkInterval": 4,
				"Passive": 1,
				"IsHidden": 1,
				"States": {
				},
				"Properties": {
				},
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_3.lua",
						"Function": "SolarBarrenAura",
					},
				},
				"Aura": "modifier_solar_barren_aura_buff",
				"Aura_Radius": 600,
				"Aura_Teams": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
				"Aura_Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
				"Aura_ApplyToCaster": 1,
			},
			"modifier_solar_barren_aura_buff": {
				"Properties": {
					"MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE": "%regen",
				},
			},
			"modifier_solar_barren_aura_buff_2": {
				"States": {
					"MODIFIER_STATE_MAGIC_IMMUNE": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"regen": "5 10 15 20 25",
			},
		},
	},
	"solar_ice_blade": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "abaddon_frostmourne",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCooldown": 20,
		"AbilityCastRange": 900,
		"Modifiers": {
			"modifier_solar_ice_blade": {
				"ThinkInterval": 1,
				"Passive": 1,
				"IsHidden": 0,
				"States": {
				},
				"Properties": {
				},
				"OnAttackLanded": {
					"ApplyModifier": {
						"Target": "TARGET",
						"ModifierName": "modifier_solar_ice_blade_debuff",
						"Duration": 2,
					},
				},
			},
			"modifier_solar_ice_blade_debuff": {
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": "%movespeed",
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%attackspeed",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "-100 -200 -300 -400 -800",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "-50 -100 -150 -200 -400",
			},
		},
	},
	"solar_fire": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "invoker_forge_spirit",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilityCastRange": 90,
		"Modifiers": {
			"modifier_solar_fire": {
				"ThinkInterval": "%interval",
				"Passive": 1,
				"IsHidden": 0,
				"States": {
				},
				"Properties": {
				},
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_3.lua",
						"Function": "SolarFire",
					},
				},
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_3.lua",
						"Function": "FireAttack",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"interval": "5 4 3 2 1",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"HPGain": 50000,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"DamageGain": 2000,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"ArmorGain": 3,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"MagicResistGain": 1,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"MoveSpeedGain": 2,
			},
		},
	},
	"solar_lock": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "shadow_demon_soul_catcher",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCooldown": 20,
		"AbilityCastRange": 900,
		"precache": {
			"particle": "particles/units/solar_lock.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_shadow_demon.vsndevts",
		},
		"OnSpellStart": {
			"AttachEffect": {
				"Target": "TARGET",
				"EffectName": "particles/units/solar_lock.vpcf",
				"EffectAttachType": "attach_hitloc",
			},
			"ApplyModifier": {
				"Target": "TARGET",
				"ModifierName": "modifier_solar_lock_debuff",
				"Duration": "%duration",
			},
			"FireSound": {
				"Target": "TARGET",
				"EffectName": "Hero_ShadowDemon.Soul_Catcher.Cast",
			},
		},
		"Modifiers": {
			"modifier_solar_lock_debuff": {
				"ThinkInterval": 1,
				"Passive": 0,
				"IsHidden": 0,
				"States": {
					"MODIFIER_STATE_ROOTED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_SILENCED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Properties": {
				},
				"IsDebuff": 1,
			},
			"modifier_solar_lock": {
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_3.lua",
						"Function": "SolarLockAI",
					},
				},
				"Passive": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": "2 3 4 5 6",
			},
		},
	},
	"sm": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "meepo_earthbind",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCooldown": 20,
		"AbilityCastRange": 900,
		"precache": {
			"particle": "particles/units/solar_lock.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_shadow_demon.vsndevts",
		},
		"OnSpellStart": {
			"AttachEffect": {
				"Target": "TARGET",
				"EffectName": "particles/units/solar_lock.vpcf",
				"EffectAttachType": "attach_hitloc",
			},
			"ApplyModifier": {
				"Target": "TARGET",
				"ModifierName": "modifier_sm_debuff",
				"Duration": "%duration",
			},
			"FireSound": {
				"Target": "TARGET",
				"EffectName": "Hero_ShadowDemon.Soul_Catcher.Cast",
			},
		},
		"Modifiers": {
			"modifier_sm_debuff": {
				"ThinkInterval": 1,
				"Passive": 0,
				"IsHidden": 0,
				"States": {
					"MODIFIER_STATE_ROOTED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_SILENCED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Properties": {
				},
				"IsDebuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"duration": 1.5,
			},
		},
	},
	"solar_ghost": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "spectre_haunt",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCooldown": 6,
		"AbilityCastRange": 900,
		"Modifiers": {
			"modifier_solar_ghost": {
				"ThinkInterval": "%interval",
				"Passive": 1,
				"IsHidden": 0,
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_3.lua",
						"Function": "SolarGhost",
					},
				},
				"States": {
					"MODIFIER_STATE_INVISIBLE": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
			"modifier_solar_ghost_illusion": {
				"Properties": {
				},
				"States": {
				},
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_3.lua",
						"Function": "SolarGhostIllusion",
					},
				},
				"Duration": 3,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"interval": "5 4 3 2 1",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "10 15 20 25 30",
			},
		},
	},
	"solar_scare": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "night_stalker_crippling_fear",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCooldown": 15,
		"AbilityCastRange": 900,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_nightstalker.vsndevts",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"Target": "TARGET",
				"ModifierName": "modifier_solar_scare_debuff",
				"Duration": 6,
			},
			"FireSound": {
				"Target": "TARGET",
				"EffectName": "Hero_Nightstalker.Trickling_Fear",
			},
		},
		"Modifiers": {
			"modifier_solar_scare": {
				"ThinkInterval": 1,
				"Passive": 1,
				"IsHidden": 1,
				"Properties": {
				},
				"OnAttack": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_3.lua",
						"Function": "SolarScare",
					},
				},
			},
			"modifier_solar_scare_debuff": {
				"ThinkInterval": 1,
				"Passive": 0,
				"IsHidden": 0,
				"Duration": 6,
				"Properties": {
					"MODIFIER_PROPERTY_MISS_PERCENTAGE": "%miss",
				},
				"IsDebuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"miss": "40 50 60 70 80",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": "6 7 8 9 10",
			},
		},
	},
	"boss_jump_strike": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "brewmaster_thunder_clap",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCastPoint": 1.3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCooldown": 8,
		"AbilityManaCost": 60,
		"AbilityCastRange": 250,
		"precache": {
			"particle": "particles/units/heroes/hero_centaur/centaur_warstomp.vpcf",
			"soundfile": "soundevents/game_sounds_creeps.vsndevts",
		},
		"OnSpellStart": {
			"Damage": {
				"Target": {
					"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
					"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
					"Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
					"Center": "TARGET",
					"Radius": 400,
				},
				"Type": "DAMAGE_TYPE_MAGICAL",
				"Damage": 12000,
			},
			"Stun": {
				"Duration": 2,
				"Target": {
					"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
					"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
					"Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
					"Center": "TARGET",
					"Radius": 400,
				},
			},
			"AttachEffect": {
				"EffectName": "particles/units/heroes/hero_centaur/centaur_warstomp.vpcf",
				"Target": "TARGET",
				"EffectAttachType": "follow_origin",
			},
			"FireSound": {
				"EffectName": "n_creep_Thunderlizard_Big.Stomp",
				"Target": "TARGET",
			},
		},
		"Modifiers": {
			"modifier_jump_strike": {
				"Passive": 1,
				"IsHidden": 1,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 50,
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": 20,
				},
			},
		},
		"AnimationPlaybackRate": 2,
	},
	"dog_wound": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "life_stealer_open_wounds",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"precache": {
			"particle": "particles/units/heroes/hero_centaur/centaur_warstomp.vpcf",
			"soundfile": "soundevents/game_sounds_items.vsndevts",
		},
		"Modifiers": {
			"modifier_wound": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"Damage": {
						"Target": "TARGET",
						"Type": "DAMAGE_TYPE_PHYSICAL",
						"Damage": 1000,
					},
					"Heal": {
						"Target": "CASTER",
						"HealAmount": 1000,
					},
					"ApplyModifier": {
						"ModifierName": "modifier_wound_debuff",
						"Target": "TARGET",
						"Duration": 30,
					},
					"FireSound": {
						"EffectName": "Item_Desolator.Target",
						"Target": "TARGET",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 50,
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": 20,
				},
			},
			"modifier_wound_debuff": {
				"IsDebuff": 1,
				"Properties": {
					"MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS": -20,
				},
			},
		},
	},
	"boss_rage": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "life_stealer_rage",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityCastPoint": 0.01,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCooldown": 20,
		"AbilityManaCost": 200,
		"precache": {
			"particle": "particles/skills/green_protect.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_life_stealer.vsndevts",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"ModifierName": "modifier_rage",
				"Target": "CASTER",
			},
			"FireSound": {
				"EffectName": "Hero_LifeStealer.Rage",
				"Target": "CASTER",
			},
		},
		"Modifiers": {
			"modifier_rage": {
				"Duration": 10,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 400,
					"MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT": 0.8,
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": 100,
					"MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE": 50,
				},
			},
		},
	},
	"dragon_energy_ball": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "satyr_hellcaller_shockwave",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 4,
		"AbilityManaCost": 200,
		"AbilityCastRange": 900,
		"precache": {
			"particle": "particles/neutral_fx/satyr_hellcaller.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_dragon_knight.vsndevts",
		},
		"OnSpellStart": {
			"TrackingProjectile": {
				"Target": "TARGET",
				"EffectName": "particles/neutral_fx/satyr_hellcaller.vpcf",
				"Dodgeable": 1,
				"ProvidesVision": 0,
				"VisionRadius": 0,
				"MoveSpeed": 900,
				"SourceAttachment": "DOTA_PROJECTILE_ATTACHMENT_ATTACK_1",
			},
			"FireSound": {
				"EffectName": "Hero_DragonKnight.DragonTail.Cast.Kindred",
				"Target": "TARGET",
			},
		},
		"OnProjectileHitUnit": {
			"Damage": {
				"Target": "TARGET",
				"Type": "DAMAGE_TYPE_PURE",
				"Damage": 30,
				"MaxHealthPercentBasedDamage": 1,
			},
		},
		"Modifiers": {
			"modifier_boss_attackspeed": {
				"Passive": 1,
				"IsHidden": 1,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 200,
				},
			},
		},
	},
	"boss_invisible": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "sandking_sand_storm",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"MaxLevel": 1,
		"precache": {
			"particle": "particles/units/heroes/hero_sandking/sandking_sandstorm.vpcf",
		},
		"Modifiers": {
			"modifier_boss_invisible": {
				"Passive": 1,
				"ThinkInterval": 1.0,
				"OnIntervalThink": {
					"Damage": {
						"Target": {
							"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
							"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
							"Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
							"Center": "CASTER",
							"Radius": 600,
						},
						"Type": "DAMAGE_TYPE_MAGICAL",
						"Damage": "%damage",
					},
				},
				"OnCreated": {
					"AttachEffect": {
						"EffectName": "particles/units/heroes/hero_sandking/sandking_sandstorm.vpcf",
						"EffectAttachType": "follow_origin",
						"Target": "CASTER",
						"ControlPoints": {
							"01": "600 600 600",
						},
					},
				},
				"States": {
					"MODIFIER_STATE_INVISIBLE": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"modifier_boss_attackspeed": {
					"Passive": 1,
					"IsHidden": 1,
					"Properties": {
						"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 200,
					},
				},
				"Properties": {
				},
				"IsPurgable": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 5000,
			},
		},
		"FightRecapLevel": 1,
	},
	"boss_burrowstrike": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "sandking_burrowstrike",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCastPoint": "0.0 0.0 0.0 0.0",
		"AbilityCooldown": 8,
		"AbilityManaCost": 200,
		"AbilityCastRange": "350 450 550 650",
		"precache": {
			"particle": "particles/generic_gameplay/generic_stunned.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_sandking.vsndevts",
		},
		"OnSpellStart": {
			"LinearProjectile": {
				"MoveSpeed": "%burrow_speed",
				"StartRadius": "%burrow_width",
				"EndRadius": "%burrow_width",
				"TargetTeams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
				"TargetTypes": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
				"HasFrontalCone": 0,
			},
			"ApplyModifier": {
				"ModifierName": "modifier_burrowstrike_caster_datadriven",
				"Target": "CASTER",
			},
			"FireEffect": {
				"EffectName": "particles/units/heroes/hero_sandking/sandking_burrowstrike.vpcf",
				"EffectAttachType": "start_at_customorigin",
				"Target": "CASTER",
				"ControlPoints": {
					"01": "POINT",
				},
			},
			"FireSound": {
				"EffectName": "Ability.SandKing_BurrowStrike",
				"Target": "CASTER",
			},
		},
		"OnProjectileHitUnit": {
			"DeleteOnHit": "true",
			"ApplyModifier": {
				"ModifierName": "modifier_burrowstrike_stun_datadriven",
				"Target": "TARGET",
			},
			"Knockback": {
				"Target": "TARGET",
				"Duration": "%burrow_anim_time",
				"Distance": 0,
				"Height": 500,
			},
			"DelayedAction": {
				"Delay": "%burrow_anim_time",
				"Action": {
					"Damage": {
						"Type": "DAMAGE_TYPE_MAGICAL",
						"Damage": "%damage",
						"Target": "TARGET",
					},
				},
			},
		},
		"OnProjectileFinish": {
			"RemoveModifier": {
				"ModifierName": "modifier_burrowstrike_caster_datadriven",
				"Target": "CASTER",
			},
		},
		"Modifiers": {
			"modifier_burrowstrike_caster_datadriven": {
				"IsHidden": 1,
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
			"modifier_burrowstrike_stun_datadriven": {
				"IsDebuff": 1,
				"Duration": "%burrow_duration",
				"OverrideAnimation": "ACT_DOTA_DISABLED",
				"EffectName": "particles/generic_gameplay/generic_stunned.vpcf",
				"EffectAttachType": "follow_overhead",
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"burrow_width": 200,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"burrow_duration": 2.17,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"burrow_speed": 2000,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"burrow_anim_time": 0.52,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"tooltip_range": 650,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"damage": 12000,
			},
		},
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_NO",
		"FightRecapLevel": 1,
	},
	"boss_epicenter": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "sandking_epicenter",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCastPoint": 0.3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCooldown": 30,
		"AbilityManaCost": 500,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_sandking.vsndevts",
			"particle": "particles/units/heroes/hero_sandking/sandking_epicenter.vpcf",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"ModifierName": "modifier_epicenter_buff_datadriven",
				"Target": "CASTER",
			},
			"FireSound": {
				"EffectName": "Ability.SandKing_Epicenter.spell",
				"Target": "CASTER",
			},
		},
		"Modifiers": {
			"modifier_epicenter_precast_datadriven": {
				"IsPurgable": 0,
				"IsHidden": 1,
				"Duration": 5,
				"OnCreated": {
					"AttachEffect": {
						"Target": "CASTER",
						"EffectName": "particles/units/heroes/hero_sandking/sandking_epicenter_tell.vpcf",
						"EffectAttachType": "start_at_custom_origin",
						"ControlPointEntities": {
							"CASTER": "attach_tail",
						},
					},
				},
			},
			"modifier_epicenter_buff_datadriven": {
				"IsPurgable": 0,
				"IsHidden": 1,
				"Duration": 9,
				"ThinkInterval": 3,
				"OnIntervalThink": {
					"FireSound": {
						"Target": "CASTER",
						"EffectName": "Ability.SandKing_Epicenter",
					},
				},
				"OnCreated": {
					"ApplyModifier": {
						"ModifierName": "modifier_epicenter_pulse_datadriven",
						"Target": "CASTER",
					},
					"FireSound": {
						"Target": "CASTER",
						"EffectName": "Ability.SandKing_Epicenter",
					},
				},
			},
			"modifier_epicenter_debuff_datadriven": {
				"IsDebuff": 1,
				"Duration": 3,
				"OnCreated": {
					"AttachEffect": {
						"EffectName": "particles/generic_gameplay/generic_stunned.vpcf",
						"EffectAttachType": "follow_overhead",
						"Target": "TARGET",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": -50,
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": -50,
				},
			},
			"modifier_epicenter_pulse_datadriven": {
				"IsPurgable": 0,
				"IsHidden": 1,
				"Attributes": "MODIFIER_ATTRIBUTE_MULTIPLE",
				"Duration": 12,
				"ThinkInterval": 0.5,
				"OnIntervalThink": {
					"ActOnTargets": {
						"Target": {
							"Center": "CASTER",
							"Radius": 900,
							"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
							"Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
							"Flags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
						},
						"Action": {
							"Damage": {
								"Damage": "%damage",
								"Type": "DAMAGE_TYPE_MAGICAL",
								"Target": "TARGET",
							},
							"ApplyModifier": {
								"ModifierName": "modifier_epicenter_debuff_datadriven",
								"Target": "TARGET",
							},
						},
					},
					"AttachEffect": {
						"Target": "CASTER",
						"EffectName": "particles/units/heroes/hero_sandking/sandking_epicenter.vpcf",
						"EffectAttachType": "start_at_customorigin",
						"ControlPoints": {
							"01": "900 900 900",
						},
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 12000,
			},
		},
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_NO",
		"FightRecapLevel": 2,
		"AbilityDuration": 3.0,
	},
	"boss_soulbody": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "visage_gravekeepers_cloak",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"MaxLevel": 1,
		"Modifiers": {
			"modifier_soulbody": {
				"Passive": 1,
				"Properties": {
					"MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_PERCENTAGE": -60,
					"MODIFIER_PROPERTY_INCOMING_SPELL_DAMAGE_CONSTANT": 60,
				},
			},
		},
		"FightRecapLevel": 1,
	},
	"boss_soulconnect": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "visage_soul_assumption",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 30,
		"AbilityManaCost": 200,
		"precache": {
			"particle": "particles/units/heroes/hero_warlock/warlock_fatal_bonds_icon.vpcf",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"ModifierName": "modifier_soulconnect_debuff",
				"Target": {
					"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
					"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
					"Center": "CASTER",
					"Radius": 600,
				},
				"Duration": 10,
			},
		},
		"Modifiers": {
			"modifier_soulconnect": {
				"Duration": 10,
				"OnTakeDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "SoulConnect",
						"DamageTaken": "%attack_damage",
						"Target": {
							"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
							"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
							"Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
							"Center": "CASTER",
							"Radius": 600,
						},
					},
				},
			},
			"modifier_soulconnect_debuff": {
				"IsDebuff": 1,
				"OnCreated": {
					"AttachEffect": {
						"EffectName": "particles/units/heroes/hero_warlock/warlock_fatal_bonds_icon.vpcf",
						"EffectAttachType": "follow_overhead",
						"Target": "CASTER",
					},
				},
			},
		},
	},
	"boss_soulclash": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "visage_grave_chill",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 30,
		"AbilityManaCost": 200,
		"AbilityCastRange": 900,
		"precache": {
			"particle": "particles/items_fx/ethereal_blade.vpcf",
			"soundfile": "soundevents/game_sounds_items.vsndevts",
		},
		"OnSpellStart": {
			"TrackingProjectile": {
				"Target": "TARGET",
				"EffectName": "particles/items_fx/ethereal_blade.vpcf",
				"Dodgeable": 1,
				"ProvidesVision": 0,
				"VisionRadius": 0,
				"MoveSpeed": 900,
				"SourceAttachment": "DOTA_PROJECTILE_ATTACHMENT_ATTACK_1",
			},
			"FireSound": {
				"EffectName": "DOTA_Item.EtherealBlade.Activate",
				"Target": "CASTER",
			},
		},
		"OnProjectileHitUnit": {
			"ApplyModifier": {
				"ModifierName": "modifier_soulclash",
				"Target": "TARGET",
				"Duration": 30,
			},
			"Damage": {
				"Target": "TARGET",
				"Type": "DAMAGE_TYPE_PURE",
				"Damage": 60,
				"MaxHealthPercentBasedDamage": 1,
			},
			"FireSound": {
				"EffectName": "DOTA_Item.EtherealBlade.Target",
				"Target": "TARGET",
			},
		},
		"Modifiers": {
			"modifier_soulclash": {
				"Properties": {
					"MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE": 1,
				},
			},
			"modifier_boss_attackspeed": {
				"Passive": 1,
				"IsHidden": 1,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 200,
				},
			},
		},
	},
	"boss_fire_stun": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "ember_spirit_sleight_of_fist",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"precache": {
			"particle": "courier_wyvern_anim_firebreath_e",
		},
		"Modifiers": {
			"modifier_fire_stun": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"Random": {
						"Chance": 25,
						"PseudeoRandom": "DOTA_PSEUDO_RANDOM_JUGG_CRIT",
						"OnSuccess": {
							"Stun": {
								"Duration": 2,
								"Target": "TARGET",
							},
							"AttachEffect": {
								"EffectName": "courier_wyvern_anim_firebreath_e",
								"EffectAttachType": "start_at_customorigin",
								"Target": "TARGET",
								"ControlPointEntities": {
									"CASTER": "attach_attack1",
								},
								"ControlPoints": {
								},
							},
							"Heal": {
								"Target": "CASTER",
								"HealAmount": 5000,
							},
						},
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 100,
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": 50,
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 8000,
			},
		},
	},
	"boss_fire_land": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "doom_bringer_doom",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"precache": {
			"particle": "particles/units/heroes/hero_warlock/warlock_rain_of_chaos.vpcf",
			"soundfile": "soundevents/game_sounds_creeps.vsndevts",
		},
		"Modifiers": {
			"modifier_fire_land": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"Random": {
						"Chance": 10,
						"PseudeoRandom": "DOTA_PSEUDO_RANDOM_JUGG_CRIT",
						"OnSuccess": {
							"Damage": {
								"Target": {
									"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
									"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
									"Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
									"Center": "CASTER",
									"Radius": 600,
								},
								"Type": "DAMAGE_TYPE_MAGICAL",
								"Damage": 8000,
							},
							"Stun": {
								"Duration": 4,
								"Target": {
									"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
									"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
									"Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
									"Center": "CASTER",
									"Radius": 600,
								},
							},
							"Heal": {
								"Target": "CASTER",
								"HealAmount": 20000,
							},
							"AttachEffect": {
								"EffectName": "particles/units/heroes/hero_warlock/warlock_rain_of_chaos.vpcf",
								"Target": "CASTER",
								"EffectAttachType": "follow_origin",
								"ControlPoints": {
								},
								"ControlPointEntities": {
								},
							},
							"FireSound": {
								"EffectName": "n_creep_Thunderlizard_Big.Stomp",
								"Target": "CASTER",
							},
						},
					},
				},
				"OnAttacked": {
					"Random": {
						"Chance": 5,
						"PseudeoRandom": "DOTA_PSEUDO_RANDOM_JUGG_CRIT",
						"OnSuccess": {
							"Damage": {
								"Target": {
									"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
									"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
									"Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
									"Center": "CASTER",
									"Radius": 600,
								},
								"Type": "DAMAGE_TYPE_MAGICAL",
								"Damage": 8000,
							},
							"Stun": {
								"Duration": 4,
								"Target": {
									"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
									"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
									"Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
									"Center": "CASTER",
									"Radius": 600,
								},
							},
							"Heal": {
								"Target": "CASTER",
								"HealAmount": 20000,
							},
							"AttachEffect": {
								"EffectName": "particles/units/heroes/hero_warlock/warlock_rain_of_chaos.vpcf",
								"Target": "CASTER",
								"EffectAttachType": "follow_origin",
								"ControlPoints": {
								},
								"ControlPointEntities": {
								},
							},
							"FireSound": {
								"EffectName": "n_creep_Thunderlizard_Big.Stomp",
								"Target": "CASTER",
							},
						},
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 24000,
			},
		},
	},
	"boss_fire_reborn": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "doom_bringer_scorched_earth",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"precache": {
			"particle": "particles/units/heroes/hero_warlock/warlock_rain_of_chaos.vpcf",
		},
		"Modifiers": {
			"modifier_fire_reborn": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"Heal": {
						"Target": "CASTER",
						"HealAmount": 1000,
					},
				},
			},
			"modifier_fire_reborn_regen": {
				"Passive": 1,
				"IsHidden": 1,
				"Properties": {
					"MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE": 1,
				},
			},
		},
	},
	"boss_absorb": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "treant_leech_seed",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCastPoint": 0.3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCooldown": 12,
		"AbilityManaCost": 300,
		"AbilityCastRange": 600,
		"precache": {
			"particle": "particles/skills/seed_entwine.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_treant.vsndevts",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"ModifierName": "modifier_absorb",
				"Target": "TARGET",
			},
			"Heal": {
				"Target": "CASTER",
				"HealAmount": 40000,
			},
			"AttachEffect": {
				"EffectName": "particles/skills/seed_absorb.vpcf",
				"EffectAttachType": "follow_origin",
				"Target": "CASTER",
			},
			"FireSound": {
				"EffectName": "Hero_Treant.LivingArmor.Cast",
				"Target": "CASTER",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_unit.lua",
				"Function": "KvDamage",
				"damage": 20000,
			},
		},
		"Modifiers": {
			"modifier_absorb": {
				"OnCreated": {
					"AttachEffect": {
						"EffectName": "particles/skills/seed_entwine.vpcf",
						"Target": "TARGET",
						"EffectAttachType": "follow_origin",
					},
				},
				"IsDebuff": 1,
				"Duration": 4,
				"States": {
					"MODIFIER_STATE_ROOTED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
			"modifier_boss_attackspeed": {
				"Passive": 1,
				"IsHidden": 1,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 200,
				},
			},
		},
	},
	"boss_green_protect": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "treant_living_armor",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityCastPoint": 0.5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCooldown": 20,
		"AbilityManaCost": 200,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_treant.vsndevts",
			"particle": "particles/skills/green_protect.vpcf",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"ModifierName": "modifier_green_protect",
				"Target": "CASTER",
			},
			"FireSound": {
				"EffectName": "Hero_Treant.LivingArmor.Target",
				"Target": "CASTER",
			},
		},
		"Modifiers": {
			"modifier_green_protect": {
				"Duration": 10,
				"OnCreated": {
					"AttachEffect": {
						"EffectName": "particles/skills/green_protect.vpcf",
						"Target": "CASTER",
						"EffectAttachType": "follow_origin",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS": 40,
					"MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE": -40,
					"MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS": 40,
					"MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT": 4000,
				},
			},
		},
	},
	"boss_overgrowth": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "treant_overgrowth",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCastPoint": 0.5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_5",
		"AbilityCooldown": 40,
		"AbilityManaCost": 1000,
		"precache": {
			"particle": "particles/skills/seed_entwine.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_treant.vsndevts",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"ModifierName": "modifier_overgrowth_regen",
				"Target": "CASTER",
			},
			"AttachEffect": {
				"EffectName": "particles/skills/seed_entwine.vpcf",
				"EffectAttachType": "follow_origin",
				"Target": {
					"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
					"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
					"Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
					"Center": "CASTER",
					"Radius": 900,
				},
			},
			"FireSound": {
				"EffectName": "Hero_Treant.Overgrowth.Cast",
				"Target": "CASTER",
			},
			"RunScript": {
				"Target": {
					"Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
					"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
					"Center": "CASTER",
					"Radius": 600,
				},
				"ScriptFile": "scripts/vscripts/ability_unit.lua",
				"Function": "KvDamage",
				"damage": 10000,
			},
		},
		"Modifiers": {
			"modifier_overgrowth_regen": {
				"Duration": 12,
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": -100,
					"MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE": 8,
				},
			},
			"modifier_overgrowth": {
				"IsDebuff": 1,
				"Duration": 12,
				"ThinkInterval": 1,
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "KvDamage",
						"damage": 10000,
					},
				},
				"States": {
					"MODIFIER_STATE_ROOTED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
	},
	"boss_untouchable": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "enchantress_untouchable",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"MaxLevel": 20,
		"Modifiers": {
			"modifier_untouchable": {
				"Passive": 1,
				"IsHidden": 1,
				"OnTakeDamage": {
					"ApplyModifier": {
						"ModifierName": "modifier_untouchable_debuff",
						"Target": "ATTACKER",
						"Duration": 5,
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%attack",
				},
			},
			"modifier_untouchable_debuff": {
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%attackspeed",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "-100 -200 -300 -400 -500 -600 -700 -800 -900 -1000 -1100 -1200 -1300 -1400 -1500 -1600 -1700 -1800 -1900 -2000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"attack": "200 300 400 500 600 700 800 900 1000",
			},
		},
		"FightRecapLevel": 1,
	},
	"hit_back": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "enchantress_impetus",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"MaxLevel": 20,
		"Modifiers": {
			"modifier_hit_back": {
				"Passive": 1,
				"OnAttackLanded": {
					"Knockback": {
						"Target": "TARGET",
						"Center": "CASTER",
						"Distance": 150,
						"Duration": 0.3,
						"Height": 0,
						"IsFixedDistance": 1,
						"ShouldStun": 0,
					},
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "HitBack",
					},
				},
			},
			"modifier_untouchable_debuff": {
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%attackspeed",
				},
			},
		},
		"FightRecapLevel": 1,
	},
	"troll_knockback": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "troll_warlord_berserkers_rage_active",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"MaxLevel": 20,
		"Modifiers": {
			"modifier_troll_knockback": {
				"Passive": 1,
				"OnAttackLanded": {
					"Random": {
						"OnSuccess": {
							"Stun": {
								"Target": "TARGET",
								"Duration": 0.2,
							},
							"ApplyModifier": {
								"Target": "TARGET",
								"ModifierName": "modifier_troll_knockback_debuff",
								"Duration": "%duration",
							},
							"Damage": {
								"Target": "TARGET",
								"Type": "DAMAGE_TYPE_PHYSICAL",
								"Damage": "%damage",
							},
						},
						"Chance": "%stun",
					},
				},
				"IsHidden": 1,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 50,
				},
			},
			"modifier_troll_knockback_debuff": {
				"IsDebuff": 1,
				"Properties": {
				},
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_1.lua",
						"Function": "ThumpCreate",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_1.lua",
						"Function": "ThumpRemove",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"stun": "15 20 25 30 35",
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"duration": "1.2 1.4 1.6 1.8 2",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage": "8000 16000 24000 32000 64000",
			},
		},
		"FightRecapLevel": 1,
	},
	"troll_concentrate": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "troll_warlord_whirling_axes_ranged",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"MaxLevel": 20,
		"Modifiers": {
			"modifier_troll_concentrate": {
				"Passive": 1,
				"OnAttack": {
					"ApplyModifier": {
						"Target": "CASTER",
						"ModifierName": "modifier_troll_concentrate _buff",
						"Duration": 10,
					},
				},
				"IsHidden": 1,
			},
			"modifier_troll_concentrate _buff": {
				"IsDebuff": 0,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%attackspeed",
					"MODIFIER_PROPERTY_BASEATTACK_BONUSDAMAGE": "%attack",
				},
				"Attributes": "MODIFIER_ATTRIBUTE_MULTIPLE",
				"IsHidden": 1,
				"IsBuff": 1,
			},
			"modifier_troll_concentrate_ai": {
				"Properties": {
				},
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_1.lua",
						"Function": "ConcentrateAI",
					},
				},
				"ThinkInterval": 0.5,
				"Passive": 1,
				"IsHidden": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "5 10 15 20 25",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"attack": "150 300 450 600 1200",
			},
		},
		"FightRecapLevel": 1,
	},
	"troll_blink": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "lone_druid_savage_roar_bear",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"MaxLevel": 20,
		"Modifiers": {
			"modifier_troll_blink": {
				"Passive": 1,
				"OnTakeDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_1.lua",
						"Function": "TrollBlink",
						"DamageTaken": "%attack_damage",
					},
				},
				"IsHidden": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_1.lua",
						"Function": "TrollBlinkStart",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"cooldown": "3 2.5 2 1.5 1",
			},
		},
		"FightRecapLevel": 1,
	},
	"troll_fireball": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "black_dragon_fireball",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"MaxLevel": 20,
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_1.lua",
				"Function": "TrollFireBall",
			},
		},
		"OnProjectileHitUnit": {
			"Damage": {
				"Target": "TARGET",
				"Type": "DAMAGE_TYPE_MAGICAL",
				"Damage": "%damage",
			},
			"DeleteOnHit": 1,
		},
		"Modifiers": {
			"modifier_troll_fireball": {
				"Passive": 1,
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/rush/rush_1.lua",
						"Function": "TrollFireBallAI",
					},
				},
				"IsHidden": 1,
				"ThinkInterval": 3,
				"IsBuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "9000 18000 27000 36000 72000",
			},
		},
		"FightRecapLevel": 1,
	},
	"troll_heal": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "forest_troll_high_priest_heal",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"MaxLevel": 20,
		"precache": {
			"particle": "particles/units/heroes/hero_witchdoctor/witchdoctor_voodoo_restoration_flame.vpcf",
		},
		"Modifiers": {
			"modifier_troll_heal": {
				"Passive": 1,
				"OnCreated": {
					"AttachEffect": {
						"Target": "CASTER",
						"ControlPointEntities": {
							"CASTER": "attach_attack1",
						},
						"EffectAttachType": "follow_hitloc",
						"EffectName": "particles/units/heroes/hero_witchdoctor/witchdoctor_voodoo_restoration_flame.vpcf",
					},
				},
				"IsHidden": 1,
				"ThinkInterval": 3,
				"IsBuff": 1,
				"Aura_Radius": "%radius",
				"Aura_Teams": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
				"Aura_Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
				"Aura_ApplyToCaster": 1,
				"Aura": "modifier_troll_heal_buff",
			},
			"modifier_troll_heal_buff": {
				"IsBuff": 1,
				"Properties": {
				},
				"OnIntervalThink": {
					"Heal": {
						"Target": "TARGET",
						"HealAmount": "%heal",
					},
				},
				"ThinkInterval": "%interval",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"heal": "300 600 900 1800",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"interval": 0.5,
			},
		},
		"FightRecapLevel": 1,
	},
	"arcane_attack": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "obsidian_destroyer_arcane_orb",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"MaxLevel": 3,
		"Modifiers": {
			"modifier_arcane_attack": {
				"Passive": 1,
				"OnAttackLanded": {
					"ApplyModifier": {
						"Target": "TARGET",
						"ModifierName": "modifier_arcane_attack_debuff",
						"Duration": 30,
					},
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "ArcaneAttack",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%bonus_attack_speed",
				},
				"OnAttacked": {
					"RunScript": {
						"Function": "ArcaneAttackAI",
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
					},
				},
			},
			"modifier_arcane_attack_debuff": {
				"Properties": {
					"MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE": "%bonus_damage",
				},
				"IsDebuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"bonus_damage": "20 40 60 80",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_attack_speed": "100 200 300 400",
			},
		},
	},
	"original_crash": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "obsidian_destroyer_sanity_eclipse",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"MaxLevel": 3,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 20,
		"AbilityManaCost": 400,
		"AbilityCastRange": 600,
		"AOERadius": 600,
		"precache": {
			"particle": "particles/units/heroes/hero_obsidian_destroyer/obsidian_destroyer_sanity_eclipse_area.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_obsidian_destroyer.vsndevts",
		},
		"OnSpellStart": {
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_ObsidianDestroyer.SanityEclipse",
			},
			"FireEffect": {
				"EffectName": "particles/units/heroes/hero_obsidian_destroyer/obsidian_destroyer_sanity_eclipse_area.vpcf",
				"EffectAttachType": "start_at_customorigin",
				"Target": "POINT",
				"ControlPoints": {
					"00": "POINT",
					"01": "600 1 1",
					"02": "600 1 1",
					"03": "600 1 1",
				},
			},
			"RunScript": {
				"Target": "POINT",
				"ScriptFile": "scripts/vscripts/ability_unit.lua",
				"Function": "OriginalCrash",
			},
		},
		"Modifiers": {
			"modifier_original_crash": {
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "1000 2000 3000 4000",
			},
		},
	},
	"boss_chaos_land": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "doom_bringer_scorched_earth",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"precache": {
			"particle": "particles/units/heroes/hero_doom_bringer/doom_scorched_earth.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_doombringer.vsndevts",
		},
		"Modifiers": {
			"modifier_scorched_earth_datadriven": {
				"IsBuff": 1,
				"IsPurgable": 0,
				"Passive": 1,
				"OnCreated": {
					"AttachEffect": {
						"EffectName": "particles/units/heroes/hero_doom_bringer/doom_scorched_earth.vpcf",
						"EffectAttachType": "follow_origin",
						"Target": "CASTER",
						"ControlPoints": {
							"01": "600 0 0",
						},
					},
				},
				"Aura": "modifier_scorched_earth_check_datadriven",
				"Aura_Radius": 600,
				"Aura_Teams": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
				"Aura_Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
				"Aura_Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
				"Aura_ApplyToCaster": 1,
				"ThinkInterval": 1.0,
				"OnIntervalThink": {
					"ActOnTargets": {
						"Target": {
							"Center": "CASTER",
							"Radius": 600,
							"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
							"Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
						},
						"Action": {
							"RunScript": {
								"ScriptFile": "scripts/vscripts/ability_unit.lua",
								"Function": "KvDamage",
								"damage": "%damage",
							},
						},
					},
				},
			},
			"modifier_scorched_earth_check_datadriven": {
				"IsHidden": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "ScorchedEarthCheck",
						"modifier": "modifier_scorched_earth_buff_datadriven",
					},
				},
				"OnDestroy": {
					"RemoveModifier": {
						"ModifierName": "modifier_scorched_earth_buff_datadriven",
						"Target": "TARGET",
					},
				},
			},
			"modifier_scorched_earth_buff_datadriven": {
				"IsHidden": 1,
				"OnCreated": {
					"FireSound": {
						"EffectName": "Hero_DoomBringer.ScorchedEarthAura",
						"Target": "TARGET",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "StopSound",
						"sound": "Hero_DoomBringer.ScorchedEarthAura",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE": 5,
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": 40,
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 100,
					"MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT": 8000,
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 20000,
			},
		},
	},
	"boss_chaos_fall": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "invoker_chaos_meteor",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"MaxLevel": 1,
		"AbilityCastPoint": 0.1,
		"AbilityCastAnimation": "ACT_DOTA_ATTACK",
		"AbilityCooldown": 20,
		"AbilityManaCost": 100,
		"AbilityCastRange": 700,
		"precache": {
			"particle": "particles/units/heroes/hero_warlock/warlock_rain_of_chaos.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_invoker.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_unit.lua",
				"Function": "invoker_chaos_meteor_datadriven_on_spell",
				"Target": {
					"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
					"Teams": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
					"Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
					"Center": "POINT",
					"Radius": 900,
				},
				"LandTime": 1.3,
				"TravelSpeed": 300,
				"VisionDistance": 500,
				"EndVisionDuration": 3,
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Invoker.ChaosMeteor.Impact",
			},
		},
		"Modifiers": {
			"modifier_boss_chaos_fall_debuff": {
				"IsDebuff": 1,
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 120000,
			},
		},
	},
	"healthincrease": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "alchemist_goblins_greed",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"MaxLevel": 1,
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_unit.lua",
				"Function": "AthenaHealth",
			},
		},
	},
	"regenincrease": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "alchemist_goblins_greed",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"MaxLevel": 1,
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_unit.lua",
				"Function": "AthenaRegen",
			},
		},
	},
	"armorincrease": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "alchemist_goblins_greed",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"MaxLevel": 1,
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_unit.lua",
				"Function": "AthenaArmor",
			},
		},
	},
	"abstrusemoon_shadow": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/shadow_moon_warden_abstrusemoon_shadow",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "D",
		"MaxLevel": 1,
		"precache": {
			"particle": "particles/units/heroes/hero_phantom_assassin/phantom_assassin_crit_impact.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_phantom_assassin.vsndevts",
		},
		"Modifiers": {
			"modifier_abstrusemoon_shadow": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackStart": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/shadowmoon_warden.lua",
						"Function": "OnAttackLanded",
					},
					"Random": {
						"OnSuccess": {
							"ApplyModifier": {
								"Target": "CASTER",
								"ModifierName": "modifier_abstrusemoon_shadow_critical",
								"OverrideAnimation": "ACT_DOTA_ATTACK_EVENT",
							},
						},
						"Chance": "%critical_chance",
					},
				},
			},
			"modifier_abstrusemoon_shadow_buff": {
				"IsHidden": 0,
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT",
				"Properties": {
					"MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE": "%bonus_damage_percent",
				},
			},
			"modifier_abstrusemoon_shadow_critical": {
				"IsHidden": 1,
				"Properties": {
					"MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE": "%critical_damage",
				},
				"OnAttackLanded": {
					"FireEffect": {
						"EffectName": "particles/units/heroes/hero_phantom_assassin/phantom_assassin_crit_impact.vpcf",
						"EffectAttachType": "start_at_customorigin",
						"ControlPointEntities": {
							"TARGET": "attach_hitloc",
						},
					},
					"FireSound": {
						"Target": "CASTER",
						"EffectName": "Hero_PhantomAssassin.CoupDeGrace",
					},
					"RemoveModifier": {
						"Target": "CASTER",
						"ModifierName": "modifier_abstrusemoon_shadow_critical",
					},
					"Lifesteal": {
						"Target": "CASTER",
						"LifestealPercent": "%life_steal",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 10,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_damage_percent": 4,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"critical_chance": 30,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"critical_damage": 400,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"life_steal": 10,
			},
		},
	},
	"shadowmoon_wheeldance": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/shadow_moon_warden_shadowmoon_wheeldance",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.0,
		"AbilityCastAnimation": "ACT_DOTA_SPAWN",
		"AbilityCooldown": 8,
		"AbilityManaCost": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
		"precache": {
			"particle": "particles/generic_gameplay/generic_stunned.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_phantom_assassin.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/shadowmoon_warden.lua",
				"Function": "ShadowmoonWheeldance",
				"DexTaken": "%damage",
				"Target": {
					"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
					"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
					"Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
					"Center": "CASTER",
					"Radius": "%radius",
				},
			},
			"ApplyModifier": {
				"ModifierName": "modifier_shadowmoon_wheeldance",
				"Duration": "%duration",
				"Target": {
					"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
					"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
					"Flags": "DOTA_UNIT_TARGET_FLAG_NONE",
					"Center": "CASTER",
					"Radius": "%radius",
				},
			},
			"FireSound": {
				"EffectName": "Hero_PhantomAssassin.CoupDeGrace",
				"Target": "CASTER",
			},
		},
		"Modifiers": {
			"modifier_shadowmoon_wheeldance": {
				"IsDebuff": 1,
				"Duration": 3,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": -600,
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": -600,
				},
			},
			"modifier_shadowmoon_wheeldance_kill": {
				"Passive": 0,
				"IsHidden": 0,
				"OnKill": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/shadowmoon_warden.lua",
						"Function": "ShadowmoonWheeldanceCooldown",
					},
				},
				"Duration": 0.5,
			},
			"modifier_shadowmoon_wheeldance_stun": {
				"IsHidden": 0,
				"Duration": 0.1,
				"EffectName": "particles/generic_gameplay/generic_stunned.vpcf",
				"EffectAttachType": "follow_overhead",
				"OverrideAnimation": "ACT_DOTA_DISABLED",
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"damage": "1.25 1.5 1.75 2 2.25 2.5 2.75 3 3.25 3.5 3.75 4 4.25 4.5 4.75 5 5.25 5.5 5.75 6",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 300,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
		},
	},
	"moonlight_projection": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/moonlight_projection",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "W",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.1,
		"AbilityCooldown": 6,
		"AbilityManaCost": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
		"AbilityCastRange": 0,
		"precache": {
			"particle": "particles/econ/items/nightstalker/nightstalker_black_nihility/nightstalker_black_nihility_void_swarm_pnt.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_queenofpain.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/shadowmoon_warden.lua",
				"Function": "VoidBlink",
				"Target": "POINT",
			},
			"FireSound": {
				"EffectName": "Hero_QueenOfPain.Blink_in",
				"Target": "CASTER",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"blink_range": "550 600 650 700 750 800 850 900 950 1000 1050 1100 1150 1200 1250 1300 1350 1400 1450 1500",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "1.25 1.5 1.75 2 2.25 2.5 2.75 3 3.25 3.5 3.75 4 4.25 4.5 4.75 5 5.25 5.5 5.75 6",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
		},
	},
	"clusters_stars": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/shadow_moon_warden_clusters_stars",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "E",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCooldown": 10,
		"AbilityManaCost": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
		"AbilityCastRange": 625,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_phantom_assassin.vsndevts",
			"particle": "particles/generic_gameplay/generic_stunned.vpcf",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/shadowmoon_warden.lua",
				"Function": "ClustersStarActive",
				"Damage": "%damage",
				"Critical": "%critical_damage",
			},
			"Stun": {
				"Target": "TARGET",
				"Duration": 2,
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "DOTA_Item.AbyssalBlade.Activate",
			},
			"ApplyModifier": {
				"Target": "TARGET",
				"ModifierName": "modifier_clusters_stars_armor",
				"Duration": 2,
			},
		},
		"Modifiers": {
			"modifier_clusters_stars": {
				"Passive": 1,
				"IsHidden": 1,
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT",
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/shadowmoon_warden.lua",
						"Function": "ClustersStar",
					},
				},
			},
			"modifier_critical": {
				"IsHidden": 1,
				"Properties": {
					"MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE": "%critical_damage",
				},
				"OnAttackLanded": {
					"FireEffect": {
						"EffectName": "particles/units/heroes/hero_phantom_assassin/phantom_assassin_crit_impact.vpcf",
						"EffectAttachType": "start_at_customorigin",
						"ControlPointEntities": {
							"TARGET": "attach_hitloc",
						},
					},
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/shadowmoon_warden.lua",
						"Function": "ClustersStars",
					},
					"FireSound": {
						"Target": "CASTER",
						"EffectName": "Hero_PhantomAssassin.CoupDeGrace",
					},
				},
			},
			"modifier_series": {
				"IsHidden": 1,
				"Duration": 1,
				"Properties": {
					"MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT": 0.01,
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 500,
				},
			},
			"modifier_clusters_stun": {
				"IsHidden": 0,
				"Duration": 0.1,
				"EffectName": "particles/generic_gameplay/generic_stunned.vpcf",
				"EffectAttachType": "follow_overhead",
				"OverrideAnimation": "ACT_DOTA_DISABLED",
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
			"modifier_clusters_stars_armor": {
				"IsDebuff": 1,
				"Properties": {
					"MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS": "%reduce_armor",
				},
				"IsHidden": 1,
				"Duration": 2,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"reduce_armor": "-6 -12 -18 -24 -30 -36 -42 -48 -54 -60 -66 -72 -78 -84 -90 -96 -102 -108 -114 -120",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"series_rate": 100,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"duration": 2,
			},
		},
	},
	"fire_spirit_1": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "fire_spirit_1",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCooldown": 8,
		"AbilityManaCost": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
		"AbilityCastRange": 1000,
		"precache": {
			"particle": "particles/units/heroes/hero_ember_spirit/ember_spirit_sleight_of_fist_caster.vpcf",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
				"Function": "OnCastAbility",
			},
		},
		"Modifiers": {
			"modifier_fire_spirit_1": {
				"IsHidden": 1,
				"States": {
					"MODIFIER_STATE_MAGIC_IMMUNE": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Properties": {
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL": 1,
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL": 1,
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE": 1,
				},
			},
			"modifier_fire_spirit_1_2": {
				"Properties": {
				},
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
						"Function": "OnDealDamage",
					},
				},
			},
			"modifier_fire_spirit_1_3": {
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT | MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"damage": "1.25 1.5 1.75 2 2.25 2.5 2.75 3 3.25 3.5 3.75 4 4.25 4.5 4.75 5 5.25 5.5 5.75 6",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "200 400 600 800 1000 1200 1400 1600 1800 2000 2200 2400 2600 2800 3000 3200 3400 3600 3800 4000",
			},
		},
	},
	"fire_spirit_2": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "fire_spirit_2",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "W",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCooldown": 6,
		"AbilityManaCost": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
		"AbilityCastRange": 1000,
		"AbilityChannelTime": 0.5,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_lina.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
				"Function": "OnCastAbility",
				"Target": "POINT",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_EmberSpirit.FireRemnant.Cast",
			},
		},
		"OnProjectileHitUnit": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
				"Function": "OnProjectileHitUnit",
			},
			"DeleteOnHit": 0,
		},
		"OnChannelFinish": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
				"Function": "OnChannelFinish",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Lina.DragonSlave.FireHair",
			},
		},
		"Modifiers": {
			"modifier_fire_spirit_2": {
				"IsHidden": 1,
				"States": {
					"MODIFIER_STATE_MAGIC_IMMUNE": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Properties": {
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL": 1,
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL": 1,
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE": 1,
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
		},
	},
	"fire_spirit_3": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "fire_spirit_3",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "E",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCooldown": 24,
		"AbilityManaCost": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_ember_spirit.vsndevts",
			"particle": "particles/skills/fire_spirit_3_1.vpcf",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_fire_spirit_3",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_EmberSpirit.FlameGuard.Cast",
			},
		},
		"Modifiers": {
			"modifier_fire_spirit_3": {
				"IsHidden": 0,
				"States": {
				},
				"Properties": {
					"MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_PERCENTAGE": "%physical_damage",
				},
				"IsBuff": 1,
				"Duration": 16,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
						"Function": "OnCreated",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
						"Function": "OnDestroy",
					},
				},
				"EffectName": "particles/skills/fire_spirit_3_1.vpcf",
				"EffectAttachType": "follow_origin",
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
						"Function": "OnAttackLanded",
						"DamageTaken": "%attack_damage",
					},
				},
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
						"Function": "OnIntervalThink",
					},
				},
				"ThinkInterval": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"physical_damage": "-22 -24 -26 -28 -30 -32 -34 -36 -38 -40 -42 -44 -46 -48 -50 -52 -54 -56 -58 -60",
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"damage": "0.22 0.24 0.26 0.28 0.3 0.32 0.34 0.36 0.38 0.4 0.42 0.44 0.46 0.48 0.5 0.52 0.54 0.56 0.58 0.6",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 400,
			},
		},
	},
	"fire_spirit_4": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "fire_spirit_4",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"HotKeyOverride": "R",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCooldown": 0,
		"AbilityManaCost": 0,
		"AbilityCastRange": 0,
		"AbilityChannelTime": 0.5,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_phoenix.vsndevts",
		},
		"OnToggleOn": {
			"ApplyModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_fire_spirit_4",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Phoenix.IcarusDive.Cast",
			},
		},
		"OnToggleOff": {
			"RemoveModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_fire_spirit_4",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "sounds/weapons/hero/phoenix/icarus_dive_stop.vsnd",
			},
		},
		"Modifiers": {
			"modifier_fire_spirit_4": {
				"IsHidden": 0,
				"States": {
				},
				"Properties": {
				},
				"IsBuff": 1,
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
						"Function": "OnIntervalThink",
					},
				},
				"ThinkInterval": 0.1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
						"Function": "OnCreated",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
						"Function": "OnDestroy",
					},
				},
			},
			"modifier_fire_spirit_4_buff": {
				"Properties": {
					"MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE": 1,
				},
				"IsHidden": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"health_regen": "0.01 0.02 0.03 0.04 0.05 0.06 0.07 0.08",
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"attack": "5 10 15 20 25 30 35 40",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"damage": "1.15 1.3 1.45 1.6 1.75 1.9 2.05 2.2",
			},
		},
	},
	"shadow_rift_garrotte": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/shadow_rift_garrotte",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "R",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastPoint": 0.2,
		"AbilityCastAnimation": "ACT_DOTA_SPAWN",
		"AbilityCooldown": 100,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"AbilityCastRange": 0,
		"precache": {
			"particle": "particles/econ/items/nightstalker/nightstalker_black_nihility/nightstalker_black_nihility_void_swarm_pnt.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_queenofpain.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/shadowmoon_warden.lua",
				"Function": "ShadowRiftGarrotte",
				"EffectName": "particles/skills/void_blink.vpcf",
			},
			"FireSound": {
				"EffectName": "Hero_QueenOfPain.Blink_in",
				"Target": "CASTER",
			},
		},
		"Modifiers": {
			"modifier_shadow_rift_garrotte": {
				"IsHidden": 1,
				"Properties": {
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL": 1,
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL": 1,
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE": 1,
				},
				"States": {
					"MODIFIER_STATE_MAGIC_IMMUNE": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"range": 900,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "1 2 3 4 5 6 7 8",
			},
		},
	},
	"test_skill_1": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "ember_spirit_sleight_of_fist",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "R",
		"MaxLevel": 3,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 1,
		"AbilityCastPoint": 0.2,
		"AbilityCastAnimation": "ACT_DOTA_SPAWN",
		"AbilityCooldown": 5,
		"AbilityManaCost": 10,
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/shadowmoon_warden.lua",
				"Function": "TestSkill",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "100 200 300",
			},
		},
	},
	"soul_requiem": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "soul_requiem",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_CHANNEL",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "R",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_6",
		"AbilityCooldown": 100,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"AbilityCastRange": 0,
		"AbilityChannelTime": 1.67,
		"precache": {
			"particle": "particles/units/heroes/hero_nevermore/nevermore_wings.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_nevermore.vsndevts",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_soul_requiem",
				"Duration": 2,
			},
			"RunScript": {
				"Target": "CASTER",
				"ScriptFile": "scripts/vscripts/ability_hero/tartarus.lua",
				"Function": "SoulRequiemChannel",
			},
			"FireSound": {
				"EffectName": "Hero_Nevermore.RequiemOfSoulsCast",
				"Target": "CASTER",
			},
			"AttachEffect": {
				"Target": "CASTER",
				"EffectName": "particles/units/heroes/hero_nevermore/nevermore_wings.vpcf",
				"EffectAttachType": "follow_chest",
			},
		},
		"OnChannelSucceeded": {
			"DeleteOnHit": 0,
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/tartarus.lua",
				"Function": "SoulRequiem",
				"Target": "CASTER",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Nevermore.RequiemOfSouls",
			},
		},
		"OnProjectileHitUnit": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/tartarus.lua",
				"Function": "SoulRequiemDamage",
			},
			"DeleteOnHit": 0,
		},
		"Modifiers": {
			"modifier_soul_requiem": {
				"States": {
					"MODIFIER_STATE_MAGIC_IMMUNE": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Properties": {
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL": 1,
				},
			},
			"modifier_soul_requiem_debuff": {
				"Properties": {
				},
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"range": 1200,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "6 12 18 24 30 36 42 48",
			},
		},
	},
	"thunder_power": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/thunder_power",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "D",
		"MaxLevel": 1,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 2,
		"precache": {
			"particle": "particles/generic_gameplay/generic_stunned.vpcf",
		},
		"Modifiers": {
			"modifier_thunder_power": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/mechanic.lua",
						"Function": "ThunderPower",
					},
				},
				"OnCreated": {
					"AttachEffect": {
						"Target": "CASTER",
						"ControlPointEntities": {
							"CASTER": "attach_attack1",
						},
						"EffectName": "particles/econ/items/faceless_void/faceless_void_weapon_voidhammer/faceless_void_weapon_voidhammer.vpcf",
						"EffectAttachType": "follow_customorigin",
					},
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/mechanic.lua",
						"Function": "ThunderPowerCreated",
					},
				},
			},
			"modifier_thunder_power_stun": {
				"Properties": {
				},
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"EffectName": "particles/generic_gameplay/generic_stunned.vpcf",
				"EffectAttachType": "follow_overhead",
				"IsDebuff": 1,
				"Duration": "%duration",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 2,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"rate": 10,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"scale": 10,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"cooldown": 2,
			},
		},
	},
	"thunder_strike": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/thunder_strike",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.3,
		"AbilityCastAnimation": "ACT_DOTA_ATTACK",
		"AbilityCooldown": 8,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"precache": {
			"soundfile": "soundevents/game_sounds_creeps.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/mechanic.lua",
				"Function": "ThunderStrike",
			},
			"FireSound": {
				"EffectName": "n_creep_Thunderlizard_Big.Stomp",
				"Target": "CASTER",
			},
			"Stun": {
				"Target": {
					"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
					"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
					"Center": "CASTER",
					"Radius": "%radius",
				},
				"Duration": "%duration",
			},
		},
		"Modifiers": {
			"modifier_thunder_strike": {
				"Passive": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/mechanic.lua",
						"Function": "ThunderStrikeCreat",
					},
				},
				"ThinkInterval": 8,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800 850 900 950 1000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"scale": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 400,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"duration": 2,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"buffpoint": 2,
			},
		},
	},
	"special_bonus_unique_omniknight_custom_1": {
		"BaseClass": "special_bonus_undefined",
		"AbilityType": "DOTA_ABILITY_TYPE_ATTRIBUTES",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"value": 4,
			},
		},
	},
	"heal_device": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/heal_device",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "W",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCooldown": 60,
		"AbilityManaCost": "80 95 110 125 140 155 170 185 200 215 230 245 260 275 290 305 320 335 350 365",
		"AbilityCastRange": 600,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_tinker.vsndevts",
			"particle": "particles/skills/heal_device.vpcf",
		},
		"OnSpellStart": {
			"RunScript": {
				"Target": "POINT",
				"ScriptFile": "scripts/vscripts/ability_hero/mechanic.lua",
				"Function": "CreateHealDevice",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Tinker.GridEffect",
			},
		},
		"Modifiers": {
			"modifier_device_heal": {
				"IsHidden": 1,
				"Aura": "modifier_device_heal_aura",
				"Aura_Radius": 600,
				"Aura_Teams": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
				"Aura_Types": "DOTA_UNIT_TARGET_ALL",
				"EffectName": "particles/skills/heal_device.vpcf",
				"EffectAttachType": "follow_origin",
				"States": {
					"MODIFIER_STATE_NO_HEALTH_BAR": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
			"modifier_device_heal_aura": {
				"Properties": {
					"MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT": "%heal_hp",
					"MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE": "%heal_hp_per",
					"MODIFIER_PROPERTY_MANA_REGEN_CONSTANT": "%heal_mana",
				},
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/mechanic.lua",
						"Function": "OnHealIn",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/mechanic.lua",
						"Function": "OnHealOut",
					},
				},
			},
			"modifier_heal_device_chain": {
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"heal_hp": "10 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"heal_mana": "4 8 12 16 20 24 28 32 36 40 44 48 52 56 60 64 68 72 76 80",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"heal_hp_per": "0.5 1 1.5 2 2.5 3 3.5 4 4.5 5 5.5 6 6.5 7 7.5 8 8.5 9 9.5 10",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"chance": "61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"duration": 40,
			},
		},
	},
	"weightlifting": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/weightlifting",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "E",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"Modifiers": {
			"modifier_weightlifting": {
				"Passive": 1,
				"IsHidden": 1,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%bonus_attackspeed",
					"MODIFIER_PROPERTY_STATS_STRENGTH_BONUS": "%str",
				},
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/mechanic.lua",
						"Function": "WeightLifting",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"bonus_attackspeed": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"rate": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"str": "10 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"damage_scale": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
		},
	},
	"indestructible": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "indestructible",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "E",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCooldown": 16,
		"AbilityManaCost": "80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250 260 270",
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_abaddon.vsndevts",
			"particle": "particles/units/heroes/hero_monkey_king/monkey_king_quad_tap_overhead.vpcf",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_indestructible_absorb",
				"Duration": 2,
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_KeeperOfTheLight.ManaLeak.Target",
			},
		},
		"Modifiers": {
			"modifier_indestructible": {
				"Passive": 1,
				"IsHidden": 1,
				"Properties": {
				},
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/monkey_king.lua",
						"Function": "Indestructible",
					},
				},
				"States": {
				},
				"ThinkInterval": 1,
			},
			"modifier_indestructible_buff": {
				"Properties": {
					"MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS": "%bonus_armor",
				},
				"Duration": "%duration",
				"States": {
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/monkey_king.lua",
						"Function": "IndestructibleRemove",
					},
					"FireSound": {
						"Target": "CASTER",
						"EffectName": "Hero_Abaddon.AphoticShield.Destroy",
					},
				},
			},
			"modifier_indestructible_absorb": {
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": 120,
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/monkey_king.lua",
						"Function": "IndestructibleCD",
					},
				},
				"EffectName": "particles/units/heroes/hero_monkey_king/monkey_king_quad_tap_overhead.vpcf",
				"EffectAttachType": "follow_overhead",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"damage_reduce_percent": "2.5 5 7.5 10 12.5 15 17.5 20 22.5 25 27.5 30 32.5 35 37.5 40 42.5 45 47.5 50",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_armor": "10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 105",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 10,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
		},
	},
	"jingubang": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "jingubang",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "R",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastAnimation": "ACT_DOTA_MK_STRIKE",
		"AbilityCooldown": 60,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"AbilityCastRange": "%thump_radius",
		"AOERadius": 400,
		"precache": {
			"particle": "particles/units/heroes/hero_monkey_king/monkey_king_strike.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_elder_titan.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"Target": "POINT",
				"ScriptFile": "scripts/vscripts/ability_hero/monkey_king.lua",
				"Function": "Jingubang",
			},
		},
		"Modifiers": {
			"modifier_jingubang_thump_debuff": {
				"Properties": {
				},
				"Duration": "%thump_duration",
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"IsDebuff": 1,
			},
			"modifier_jingubang_crush_debuff": {
				"Properties": {
				},
				"Duration": "%crush_duration",
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"IsDebuff": 1,
				"IsPurgable": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"thump_damage": "40 80 120 160 200 240 280 320",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"thump_radius": 1200,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"thump_duration": 1,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"crush_damage": "80 160 240 320 400 480 560 640",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"crush_radius": 400,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"crush_duration": 4,
			},
		},
	},
	"stick_wind": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "stick_wind",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "W",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_MK_STRIKE",
		"AbilityCooldown": 10,
		"AbilityManaCost": "80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250 260 270",
		"precache": {
			"particle": "particles/units/heroes/hero_monkey_king/monkey_king_strike.vpcf",
		},
		"OnSpellStart": {
			"RunScript": {
				"Target": "POINT",
				"ScriptFile": "scripts/vscripts/ability_hero/monkey_king.lua",
				"Function": "StickWind",
			},
		},
		"Modifiers": {
			"modifier_stick_wind_debuff": {
				"Properties": {
					"MODIFIER_PROPERTY_MISS_PERCENTAGE": "%miss",
				},
				"Duration": "%duration",
				"States": {
				},
				"IsDebuff": 1,
			},
			"modifier_stick_wind_knockback": {
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"IsDebuff": 1,
				"IsHidden": 1,
				"Duration": 1,
			},
			"modifier_stick_wind": {
				"IsBuff": 1,
				"States": {
					"MODIFIER_STATE_MAGIC_IMMUNE": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
			"modifier_stick_wind_buff": {
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT | MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"strike_damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"miss": 60,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"speed": 1200,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"distance": 1200,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"radius": 350,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
		},
	},
	"void_barrier": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/void_barrier",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_TOGGLE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"HotKeyOverride": "R",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastPoint": 0,
		"AbilityManaCost": "60 120 180 240 300 360 420 480",
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_keeper_of_the_light.vsndevts",
			"particle": "particles/units/heroes/hero_stormspirit/stormspirit_ball_lightning_end.vpcf",
		},
		"OnToggleOn": {
			"ApplyModifier": {
				"ModifierName": "modifier_void_barrier",
				"Target": "CASTER",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/mechanic.lua",
				"Function": "VoidBarrierOn",
			},
		},
		"OnToggleOff": {
			"RemoveModifier": {
				"ModifierName": "modifier_void_barrier",
				"Target": "CASTER",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/mechanic.lua",
				"Function": "VoidBarrierOff",
			},
		},
		"Modifiers": {
			"modifier_void_barrier": {
				"Aura": "modifier_void_barrier_arua",
				"Aura_Radius": 600,
				"Aura_Teams": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
				"Aura_Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
				"OnCreated": {
					"FireSound": {
						"EffectName": "Hero_Terrorblade.Reflection",
						"Target": "CASTER",
					},
					"AttachEffect": {
						"EffectName": "particles/skills/void_barrier.vpcf",
						"Target": "CASTER",
						"EffectAttachType": "follow_chest",
					},
				},
				"OnAttacked": {
					"Random": {
						"Chance": 30,
						"PseudeoRandom": "DOTA_PSEUDO_RANDOM_JUGG_CRIT",
						"OnSuccess": {
							"Stun": {
								"Target": "ATTACKER",
								"Duration": "%duration",
							},
							"RunScript": {
								"ScriptFile": "scripts/vscripts/ability_hero/mechanic.lua",
								"Function": "ArcLightning",
								"Target": "ATTACKER",
								"Damage": "%damage",
							},
							"FireSound": {
								"EffectName": "Hero_KeeperOfTheLight.BlindingLight",
								"Target": "CASTER",
							},
							"AttachEffect": {
								"EffectName": "particles/units/heroes/hero_stormspirit/stormspirit_ball_lightning_end.vpcf",
								"Target": "ATTACKER",
								"EffectAttachType": "follow_chest",
								"ControlPoints": {
								},
								"ControlPointEntities": {
								},
							},
						},
					},
				},
				"OnIntervalThink": {
					"SpendMana": {
						"Mana": "%manacost",
					},
				},
				"ThinkInterval": 1,
			},
			"modifier_void_barrier_arua": {
				"IsHidden": 1,
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": "%movespeed",
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%attackspeed",
					"MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS": "%magicdef",
					"MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE": 100,
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"manacost": "10 20 30 40 50 60 70 80",
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"scale": "100 125 150 175 200 225 250 275",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage": "5 10 15 20 25 30 35 40",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "30 40 50 60 70 80 90 100",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "10 12 14 16 18 20 22 24",
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"magicdef": "10 12 14 16 18 20 22 24",
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"duration": 2,
			},
		},
	},
	"chase_moon_and_star": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/chase_moon_and_star",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "D",
		"MaxLevel": 1,
		"precache": {
			"particle": "particles/skills/moonstar_gold.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_medusa.vsndevts",
		},
		"OnProjectileHitUnit": {
			"DeleteOnHit": 1,
			"FireSound": {
				"EffectName": "Hero_Medusa.AttackSplit",
				"Target": "TARGET",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/windrunner.lua",
				"Function": "ChaseMoonAndStarDamage",
			},
		},
		"Modifiers": {
			"modifier_chase_moon_and_star": {
				"Passive": 1,
				"IsHidden": 1,
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT",
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/windrunner.lua",
						"Function": "ChaseMoonAndStar",
					},
				},
			},
			"modifier_star_buff": {
				"IsDebuff": 1,
				"Duration": 10,
				"Properties": {
					"MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS": -1,
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"rate": 60,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"armor": 1,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage": 5,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
		},
	},
	"multiple_shoot": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/multiple_shoot",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.2,
		"AbilityCastAnimation": "ACT_DOTA_ATTACK",
		"AbilityCooldown": 9,
		"AbilityManaCost": "80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250 260 270",
		"AbilityCastRange": 1500,
		"precache": {
			"particle": "particles/units/heroes/hero_windrunner/windrunner_spell_powershot.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_windrunner.vsndevts",
		},
		"OnSpellStart": {
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Ability.Powershot",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/windrunner.lua",
				"Function": "MultipleShoot",
				"Target": "POINT",
			},
		},
		"OnProjectileHitUnit": {
			"DeleteOnHit": 0,
			"Damage": {
				"Target": "TARGET",
				"Type": "DAMAGE_TYPE_PHYSICAL",
				"Damage": "%basedamage",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/windrunner.lua",
				"Function": "MultipleShootDamage",
				"Target": "TARGET",
				"Damage": "%damage",
			},
			"FireSound": {
				"EffectName": "Hero_Windrunner.PowershotDamage",
				"Target": "TARGET",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"basedamage": "30 60 90 120 150 180 210 240 270 300 330 360 390 420 450 480 510 540 570 600",
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"range": 1200,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"speed": 3000,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"radius": 125,
			},
		},
	},
	"gust": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/gust",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "W",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.15,
		"AbilityCooldown": 13,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityCastRange": 900,
		"precache": {
			"particle": "particles/generic_gameplay/generic_stunned.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_drowranger.vsndevts",
		},
		"OnSpellStart": {
			"LinearProjectile": {
				"Target": "POINT",
				"EffectName": "particles/units/heroes/hero_drow/drow_silence_wave.vpcf",
				"MoveSpeed": 2000,
				"StartRadius": "%radius",
				"StartPosition": "attach_attack1",
				"EndRadius": "%radius",
				"FixedDistance": 900,
				"TargetTeams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
				"TargetTypes": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
				"TargetFlags": "DOTA_UNIT_TARGET_FLAG_NONE",
				"HasFrontalCone": 0,
			},
			"FireSound": {
				"EffectName": "Hero_DrowRanger.Silence",
				"Target": "CASTER",
			},
		},
		"OnProjectileHitUnit": {
			"DeleteOnHit": 0,
			"DelayedAction": {
				"Action": {
					"ApplyModifier": {
						"Target": "TARGET",
						"ModifierName": "modifier_gust",
					},
				},
				"Delay": 1,
			},
			"ApplyModifier": {
				"Target": "TARGET",
				"ModifierName": "modifier_gust_stun",
			},
			"Random": {
				"Chance": 60,
				"OnSuccess": {
					"ApplyModifier": {
						"ModifierName": "modifier_gust_debuff",
						"Target": "TARGET",
					},
				},
			},
			"Damage": {
				"Target": "TARGET",
				"Type": "DAMAGE_TYPE_MAGICAL",
				"Damage": "%damage",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/windrunner.lua",
				"Function": "GustDamage",
				"intellect": "%intellect",
			},
		},
		"Modifiers": {
			"modifier_gust": {
				"Duration": "%duration",
				"IsDebuff": 1,
				"EffectName": "particles/units/heroes/hero_elder_titan/elder_titan_scepter_disarm.vpcf",
				"EffectAttachType": "follow_overhead",
				"Properties": {
					"MODIFIER_PROPERTY_MISS_PERCENTAGE": "%miss",
				},
			},
			"modifier_gust_debuff": {
				"Duration": "%duration",
				"IsDebuff": 1,
				"Properties": {
					"MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS": "%armor",
				},
			},
			"modifier_gust_stun": {
				"Duration": 1,
				"IsDebuff": 1,
				"Properties": {
				},
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"IsHidden": 1,
				"EffectName": "particles/generic_gameplay/generic_stunned.vpcf",
				"EffectAttachType": "follow_overhead",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 300,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"distance": 400,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"duration": "2.0 2.2 2.4 2.6 2.8 3.0 3.2 3.4 3.6 3.8 4.0 4.2 4.4 4.6 4.8 5.0 5.2 5.4 5.6 5.8",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"intellect": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"armor": "-2 -4 -6 -8 -10 -12 -14 -16 -18 -20 -22 -24 -26 -28 -30 -32 -34 -36 -38 -40",
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"miss": "30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49",
			},
		},
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_NO",
	},
	"dark_fire": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "dark_fire",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.25,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCooldown": 12,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityCastRange": 2000,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_invoker.vsndevts",
			"particle": "particles/generic_gameplay/generic_stunned.vpcf",
		},
		"OnSpellStart": {
			"RunScript": {
				"Target": "POINT",
				"ScriptFile": "scripts/vscripts/ability_hero/lilith.lua",
				"Function": "OnSpellStart",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Ability.LagunaBladeImpact",
			},
		},
		"OnAbilityPhaseStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/lilith.lua",
				"Function": "OnAbilityPhaseStart",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Invoker.Invoke",
			},
		},
		"Modifiers": {
			"modifier_dark_fire_debuff": {
				"Properties": {
					"MODIFIER_PROPERTY_MISS_PERCENTAGE": "%miss",
				},
				"IsDebuff": 1,
				"Duration": "%miss_duration",
				"States": {
				},
			},
			"modifier_dark_fire_stun": {
				"Duration": "%stun_duration",
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"EffectName": "particles/generic_gameplay/generic_stunned.vpcf",
				"EffectAttachType": "follow_overhead",
				"OverrideAnimation": "ACT_DOTA_DISABLED",
				"OnDestroy": {
					"ApplyModifier": {
						"Target": "TARGET",
						"ModifierName": "modifier_dark_fire_debuff",
					},
				},
				"IsDebuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "200 400 600 800 1000 1200 1400 1600 1800 2000 2200 2400 2600 2800 3000 3200 3400 3600 3800 4000",
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"duration": 3,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"intellect": "3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"distance": 2000,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"width": 200,
			},
			"06": {
				"var_type": "FIELD_FLOAT",
				"stun_duration": 1.5,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"miss": 100,
			},
			"08": {
				"var_type": "FIELD_FLOAT",
				"miss_duration": 3.5,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"ignite_count": 6,
			},
		},
		"AnimationPlaybackRate": 1.5,
	},
	"dark_fire_up": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "dark_fire",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCooldown": 12,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityCastRange": 2000,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_invoker.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"Target": "POINT",
				"ScriptFile": "scripts/vscripts/ability_hero/lilith.lua",
				"Function": "DarkFireUp",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Phoenix.SunRay.Cast",
			},
		},
		"OnAbilityPhaseStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/lilith.lua",
				"Function": "DarkFireStart",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Invoker.Invoke",
			},
		},
		"Modifiers": {
			"modifier_dark_fire_debuff": {
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": "%move_speed",
				},
				"IsDebuff": 1,
				"Duration": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"duration": 3,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"intellect": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"move_speed": "-10 -20 -30 -40 -50 -60 -70 -80 -90 -100 -110 -120 -130 -140 -150 -160 -170 -180 -190 -200",
			},
		},
	},
	"light_array": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "light_array",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "W",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.25,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCooldown": 6,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityCastRange": 1300,
		"AOERadius": 300,
		"precache": {
			"particle": "particles/generic_gameplay/generic_stunned.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_invoker.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"Target": "POINT",
				"ScriptFile": "scripts/vscripts/ability_hero/lilith.lua",
				"Function": "OnSpellStart",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Ability.LightStrikeArray",
			},
		},
		"OnAbilityPhaseStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/lilith.lua",
				"Function": "OnAbilityPhaseStart",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Invoker.Invoke",
			},
		},
		"Modifiers": {
			"modifier_light_array_stun": {
				"Properties": {
				},
				"IsDebuff": 1,
				"Duration": "%stun_duration",
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"EffectName": "particles/generic_gameplay/generic_stunned.vpcf",
				"EffectAttachType": "follow_overhead",
				"OnDestroy": {
					"ApplyModifier": {
						"Target": "TARGET",
						"ModifierName": "modifier_light_array_debuff",
					},
				},
				"OverrideAnimation": "ACT_DOTA_DISABLED",
			},
			"modifier_light_array_debuff": {
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": -80,
				},
				"IsDebuff": 1,
				"Duration": "%duration",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"stun_duration": 1.5,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"intellect": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 350,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "80 160 240 320 400 480 560 640 720 800 880 960 1040 1120 1200 1280 1360 1440 1520 1600",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
			"06": {
				"var_type": "FIELD_FLOAT",
				"interval": 1,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"movespeed": 80,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"ignite_count": 3,
			},
		},
		"AnimationPlaybackRate": 1.5,
	},
	"drow_ranger_1_11": {
		"BaseClass": "ability_lua",
		"AbilityTextureName": "drow_ranger_1_1",
		"ScriptFile": "ability_hero/drow_ranger/drow_ranger_1_1",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCooldown": 8,
		"AbilityManaCost": "60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250",
		"AbilityCastRange": 1200,
		"AOERadius": 300,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_oracle.vsndevts",
			"particle": "particles/units/heroes/hero_oracle/oracle_purifyingflames.vpcf",
		},
		"OnSpellStart": {
			"RunScript": {
				"Target": "POINT",
				"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
				"Function": "OnSpellStart",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Oracle.PurifyingFlames.Damage",
			},
			"ApplyModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_oracle_1_buff",
			},
		},
		"Modifiers": {
			"modifier_oracle_1_debuff": {
				"Properties": {
				},
				"IsDebuff": 1,
				"EffectName": "particles/heroes/oracle/oracle_1_buff.vpcf",
				"EffectAttachType": "follow_origin",
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnIntervalThink",
					},
				},
				"ThinkInterval": "%interval",
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnCreated",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnDestroy",
					},
				},
			},
			"modifier_oracle_1_buff": {
				"Properties": {
				},
				"IsDebuff": 0,
				"Duration": "%duration",
				"EffectName": "particles/units/heroes/hero_oracle/oracle_purifyingflames.vpcf",
				"EffectAttachType": "follow_origin",
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnIntervalThink",
					},
				},
				"ThinkInterval": "%interval",
				"IsBuff": 1,
			},
			"modifier_oracle_1": {
				"Passive": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnInit",
					},
				},
				"IsDebuff": 0,
				"IsHidden": 1,
			},
		},
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"arrows_per_sec": 24,
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"distance": 1000,
			},
			"12": {
				"var_type": "FIELD_INTEGER",
				"chance": 15,
			},
			"13": {
				"var_type": "FIELD_INTEGER",
				"cooldown": 3,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"base_damage": 50,
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"agility_damage": 1.5,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 500,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"movespeed_reduce": 30,
			},
			"06": {
				"var_type": "FIELD_FLOAT",
				"reduce_duration": 1.5,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"collision_radius": 50,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"splash_radius": 150,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"speed": 900,
			},
		},
	},
	"drow_ranger_1_22": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "drow_ranger_1_2",
		"ScriptFile": "ability_hero/drow_ranger/drow_ranger_1_1",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCooldown": 8,
		"AbilityManaCost": "60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250",
		"AbilityCastRange": 1200,
		"AOERadius": 300,
		"Modifiers": {
			"modifier_drow_ranger_1_2": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/drow_ranger.lua",
						"Function": "OnAttackLanded",
					},
				},
			},
		},
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"arrows_per_sec": 24,
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"distance": 1000,
			},
			"12": {
				"var_type": "FIELD_INTEGER",
				"chance": 15,
			},
			"13": {
				"var_type": "FIELD_INTEGER",
				"cooldown": 3,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"agility_damage": 1.5,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"base_damage": 50,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 500,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"movespeed_reduce": 30,
			},
			"06": {
				"var_type": "FIELD_FLOAT",
				"reduce_duration": 1.5,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"collision_radius": 50,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"splash_radius": 150,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"speed": 900,
			},
		},
	},
	"drow_ranger_3_22": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "drow_ranger_3_2",
		"ScriptFile": "ability_hero/drow_ranger/drow_ranger_1_1",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "E",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AOERadius": 300,
		"Modifiers": {
			"modifier_drow_ranger_3_2": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/drow_ranger.lua",
						"Function": "OnAttackLanded",
					},
				},
			},
			"modifier_drow_ranger_3_2_debuff": {
				"IsDebuff": 1,
				"Duration": "%debuff_duration",
			},
			"modifier_drow_ranger_3_2_agility": {
				"Properties": {
					"MODIFIER_PROPERTY_STATS_AGILITY_BONUS": 1,
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": 50,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"attack_agility_damage": 0.25,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"agility_damage": 3,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"require_count": 30,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"agility_percent": 20,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"agility_percent_lv": 1,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"debuff_duration": 3,
			},
		},
	},
	"drow_ranger_3_11": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "drow_ranger_marksmanship",
		"ScriptFile": "ability_hero/drow_ranger/drow_ranger_1_1",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
		"HotKeyOverride": "E",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AOERadius": 300,
		"Modifiers": {
			"modifier_drow_ranger_3_1": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/drow_ranger.lua",
						"Function": "OnAttackLanded",
					},
				},
			},
			"modifier_drow_ranger_3_1_movespeed": {
				"IsDebuff": 1,
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": "%movespeed_reduce",
				},
				"Duration": "%reduce_duration",
			},
			"modifier_drow_ranger_3_1_freeze": {
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_FROZEN": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"IsDebuff": 1,
				"OnTakeDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/drow_ranger.lua",
						"Function": "OnCurseDamage",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": 50,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"agility_damage": 1.5,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"movespeed_reduce": -20,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"reduce_duration": 3,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"require_count": 8,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"curse_duration": 2,
			},
		},
	},
	"alacrity": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "windrunner_windrun",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
		"HotKeyOverride": "E",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCooldown": 12,
		"AbilityManaCost": "60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250",
		"precache": {
			"particle": "particles/econ/items/windrunner/windrunner_cape_cascade/windrunner_windrun_cascade.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_windrunner.vsndevts",
		},
		"OnSpellStart": {
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Ability.Windrun",
			},
			"ApplyModifier": {
				"ModifierName": "modifier_alacrity",
				"Target": "CASTER",
			},
		},
		"Modifiers": {
			"modifier_alacrity_cooldown": {
				"Duration": 12,
				"IsHidden": 1,
				"OnDestroy": {
					"ApplyModifier": {
						"ModifierName": "modifier_alacrity_evasion",
						"Target": "CASTER",
					},
				},
			},
			"modifier_alacrity": {
				"Duration": "%duration",
				"Aura": "modifier_alacrity_debuff",
				"Aura_Radius": 400,
				"Aura_Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
				"Aura_Types": "DOTA_UNIT_TARGET_ALL",
				"OnCreated": {
					"RemoveModifier": {
						"ModifierName": "modifier_alacrity_evasion",
						"Target": "CASTER",
					},
					"ApplyModifier": {
						"ModifierName": "modifier_alacrity_cooldown",
						"Target": "CASTER",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_EVASION_CONSTANT": 100,
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": "%movespeed_active",
				},
				"States": {
					"MODIFIER_STATE_NO_UNIT_COLLISION": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"EffectName": "particles/econ/items/windrunner/windrunner_cape_cascade/windrunner_windrun_cascade.vpcf",
				"EffectAttachType": "follow_origin",
			},
			"modifier_alacrity_debuff": {
				"IsDebuff": 1,
				"IsPurgable": 0,
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": "%reduce_movespeed",
				},
			},
			"modifier_alacrity_evasion": {
				"IsHidden": 1,
				"Passive": 1,
				"Properties": {
					"MODIFIER_PROPERTY_EVASION_CONSTANT": "%evasion",
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": "%movespeed",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"evasion": "12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "36 40 44 48 52 56 60 64 68 72 76 80 84 88 92 96 100 104 108 112",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"reduce_movespeed": -240,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"movespeed_active": 240,
			},
		},
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_NO",
		"AbilityDuration": 4,
	},
	"arrow_strom": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/arrow_strom",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"HotKeyOverride": "R",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastPoint": 0.3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCooldown": 90,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"precache": {
			"particle": "particles/skills/arrow_strom_1.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_drowranger.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/windrunner.lua",
				"Function": "ArrowStromStart",
			},
		},
		"Modifiers": {
			"modifier_arrow_strom": {
				"IsPurgable": 0,
				"IsHidden": 1,
				"ThinkInterval": 0.03,
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/windrunner.lua",
						"Function": "ArrowStrom",
						"Damage": "%damage",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "5 10 15 20 25 30 35 40",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 200,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"max_radius": 1200,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
		},
	},
	"meteor_storm": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "meteor_storm",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"HotKeyOverride": "R",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastPoint": 0.3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCooldown": 30,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"precache": {
			"particle": "particles/generic_gameplay/generic_stunned.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_invoker.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/lilith.lua",
				"Function": "OnSpellStart",
			},
			"AttachEffect": {
				"Target": "CASTER",
				"EffectName": "particles/skills/rain_of_chaos.vpcf",
				"EffectAttachType": "attach_origin",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Invoker.Invoke",
			},
		},
		"Modifiers": {
			"modifier_meteor_storm_debuff": {
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Duration": "%stun_duration",
				"IsDebuff": 1,
				"EffectName": "particles/generic_gameplay/generic_stunned.vpcf",
				"EffectAttachType": "follow_overhead",
				"OverrideAnimation": "ACT_DOTA_DISABLED",
			},
		},
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"ignite_count": 2,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "12 24 36 48 60 72 84 96",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 250,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"max_radius": 800,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"stun_duration": "1.25 1.5 1.75 2 2.25 2.5 2.75 3",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"delay": 1,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"wave_count": 12,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"count_per_wave": 2,
			},
			"08": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.25,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
		},
	},
	"meteor_storm_up": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "meteor_storm",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"HotKeyOverride": "R",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastPoint": 0,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCooldown": 15,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"precache": {
			"particle": "particles/generic_gameplay/generic_stunned.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_invoker.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/lilith.lua",
				"Function": "OnSpellStart",
			},
			"AttachEffect": {
				"Target": "CASTER",
				"EffectName": "particles/skills/rain_of_chaos.vpcf",
				"EffectAttachType": "attach_origin",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Invoker.Invoke",
			},
		},
		"Modifiers": {
			"modifier_meteor_storm_debuff": {
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Duration": "%duration",
				"IsDebuff": 1,
				"EffectName": "particles/generic_gameplay/generic_stunned.vpcf",
				"EffectAttachType": "follow_overhead",
			},
		},
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"ignite_count": 2,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "16 32 48 64 80 96 112 128",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 350,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"max_radius": 800,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"stun_duration": "1.25 1.5 1.75 2 2.25 2.5 2.75 3",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"delay": 1,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"wave_count": 15,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"count_per_wave": 2,
			},
			"08": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.2,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
		},
	},
	"space_rift": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/space_rift",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "D",
		"MaxLevel": 1,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 5,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"center_damage": 0.05,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 200,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"center_radius": 50,
			},
		},
	},
	"chronos_magic": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/chronos_magic",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.0,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCooldown": 13,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityCastRange": 1400,
		"AoERadius": 400,
		"precache": {
			"particle": "particles/skills/chronos_magic.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_dark_seer.vsndevts",
		},
		"OnSpellStart": {
			"FireSound": {
				"EffectName": "Hero_Dark_Seer.Vacuum",
				"Target": "CASTER",
			},
			"FireEffect": {
				"EffectName": "particles/skills/chronos_magic.vpcf",
				"EffectAttachType": "follow_chest",
				"Target": "CASTER",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/chronos_magician.lua",
				"Function": "ChronosMagic",
				"Target": "POINT",
			},
		},
		"Modifiers": {
			"modifier_chronos_magic": {
				"IsPurgable": 0,
				"OverrideAnimation": "ACT_DOTA_FLAIL",
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_UNIT_COLLISION": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"IsDebuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 500,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"duration": 0.2,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"pull_damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"pull_bonus": 0.01,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"open_damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
		},
	},
	"arcane_supremacy_1": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/chronos_magic",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.0,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCooldown": 13,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityCastRange": 1400,
		"AoERadius": 400,
		"precache": {
			"particle": "particles/skills/chronos_magic.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_dark_seer.vsndevts",
		},
		"OnSpellStart": {
			"FireSound": {
				"EffectName": "Hero_Dark_Seer.Vacuum",
				"Target": "CASTER",
			},
			"FireEffect": {
				"EffectName": "particles/skills/chronos_magic.vpcf",
				"EffectAttachType": "follow_chest",
				"Target": "CASTER",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/chronos_magician.lua",
				"Function": "ChronosMagic",
				"Target": "POINT",
			},
		},
		"Modifiers": {
			"modifier_arcane_supremacy_1": {
				"IsPurgable": 0,
				"OverrideAnimation": "ACT_DOTA_FLAIL",
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_UNIT_COLLISION": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"IsDebuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 500,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"duration": 0.2,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"pull_damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"pull_bonus": 0.01,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"open_damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
		},
	},
	"teleport_phase": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/teleport_phase",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "W",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.0,
		"AbilityCooldown": 8,
		"AbilityManaCost": "80 95 110 125 140 155 170 185 200 215 230 245 260 275 290 305 320 335 350 365",
		"AbilityCastRange": "1100 1200 1300 1400 1500 1600 1700 1800 1900 2000 2100 2200 2300 2400 2500 2600 2700 2800 2900 3000",
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_obsidian_destroyer.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/chronos_magician.lua",
				"Function": "TransferMatrix",
				"Target": "POINT",
			},
			"FireSound": {
				"EffectName": "Hero_ObsidianDestroyer.AstralImprisonment.End",
				"Target": "CASTER",
			},
			"ApplyModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_teleport_phase",
				"Duration": 1,
			},
		},
		"Modifiers": {
			"modifier_teleport_phase": {
				"IsHidden": 1,
				"States": {
					"MODIFIER_STATE_ROOTED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"blink_range": "2050 2100 2150 2200 2250 2300 2350 2400 2450 2500 2550 2600 2650 2700 2750 2800 2850 2900 2950 3000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"delay": "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": "300 300 300 300 300 300 300 300 300 300 300 300 300 300 300 300 300 300 300 300",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
		},
	},
	"teleport_phase_up": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/teleport_phase",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "W",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.0,
		"AbilityCooldown": 8,
		"AbilityManaCost": "80 95 110 125 140 155 170 185 200 215 230 245 260 275 290 305 320 335 350 365",
		"AbilityCastRange": "2200 2400 2600 2800 3000 3200 3400 3600 3800 4000 4200 4400 4600 4800 5000 5200 5400 5600 5800 6000",
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_obsidian_destroyer.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/chronos_magician.lua",
				"Function": "TransferMatrix",
				"Target": "POINT",
			},
			"FireSound": {
				"EffectName": "Hero_ObsidianDestroyer.AstralImprisonment.End",
				"Target": "CASTER",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"blink_range": "1100 1200 1300 1400 1500 1600 1700 1800 1900 2000 2100 2200 2300 2400 2500 2600 2700 2800 2900 3000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"delay": 0,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": "300 300 300 300 300 300 300 300 300 300 300 300 300 300 300 300 300 300 300 300",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
		},
	},
	"space_barrier": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/space_barrier",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "E",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.0,
		"AbilityCooldown": 18,
		"AbilityManaCost": "160 190 220 250 280 310 340 370 400 430 460 490 520 550 580 610 640 670 700 730",
		"AbilityCastRange": 1400,
		"AoERadius": 400,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_queenofpain.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/chronos_magician.lua",
				"Function": "SpaceBarrier",
				"Target": "POINT",
			},
		},
		"Modifiers": {
			"modifier_space_barrier": {
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_UNIT_COLLISION": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"IsDebuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": "400 400 400 400 400 400 400 400 400 400 400 400 400 400 400 400 400 400 400 400",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"delay": 1,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
		},
	},
	"fluctuation": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/fluctuation",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "R",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastPoint": 0.0,
		"AbilityCooldown": 40,
		"AbilityManaCost": "300 450 600 750 900 1050 1200 1350",
		"AbilityCastRange": 1000,
		"AoERadius": 600,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_queenofpain.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/chronos_magician.lua",
				"Function": "Fluctuation",
				"Target": "POINT",
			},
		},
		"Modifiers": {
			"modifier_fluctuation": {
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%slow",
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": "%slow",
				},
				"IsDebuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "1 2 3 4 5 6 7 8",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"slow": -400,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": "600 600 600 600 600 600 600 600",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800",
			},
		},
	},
	"fire_spirit_0": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "fire_spirit_0",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "D",
		"MaxLevel": 1,
		"AbilityCooldown": 2,
		"AbilityManaCost": 20,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_ember_spirit.vsndevts",
			"particle": "particles/units/heroes/hero_ember_spirit/ember_spirit_sleight_of_fist_targetted_marker.vpcf",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
				"Function": "OnCastAbility",
			},
		},
		"Modifiers": {
			"modifier_fire_spirit_0": {
				"IsHidden": 1,
				"IsBuff": 0,
				"Properties": {
				},
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
						"Function": "OnDealDamage",
					},
				},
				"Passive": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
						"Function": "OnCreated",
					},
					"FireSound": {
						"EffectName": "Hero_EmberSpirit.Attack",
					},
				},
			},
			"modifier_fire_spirit_0_debuff": {
				"IsDebuff": 1,
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
						"Function": "OnRemoveModifier",
					},
				},
				"Duration": 6,
				"EffectName": "particles/units/heroes/hero_ember_spirit/ember_spirit_sleight_of_fist_targetted_marker.vpcf",
				"EffectAttachType": "follow_overhead",
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/fire_spirit.lua",
						"Function": "OnIntervalThink",
					},
				},
				"ThinkInterval": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"critical": 400,
			},
		},
		"AbilityDuration": 6,
	},
	"space_cut": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "juggernaut_blade_dance",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.3,
		"AbilityCastAnimation": "ACT_DOTA_ATTACK_EVENT",
		"AbilityCooldown": 8,
		"AbilityManaCost": "80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250 260 270",
		"AbilityCastRange": 1200,
		"precache": {
			"particle": "particles/generic_gameplay/generic_stunned.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_brewmaster.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/juggernaut.lua",
				"Function": "SpaceCut",
				"Target": "POINT",
			},
			"FireEffect": {
				"Target": "CASTER",
				"EffectName": "particles/skills/space_cut_blade.vpcf",
				"EffectAttachType": "follow_origin",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Brewmaster.Brawler.Crit",
			},
		},
		"OnAbilityPhaseStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/juggernaut.lua",
				"Function": "SpaceCutIllusion",
				"Target": "POINT",
			},
		},
		"Modifiers": {
			"modifier_space_cut": {
				"States": {
					"MODIFIER_STATE_DISARMED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Duration": 0.3,
				"IsDebuff": 1,
				"IsHidden": 1,
			},
			"modifier_space_cut_debuff": {
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"IsDebuff": 1,
				"EffectName": "particles/generic_gameplay/generic_stunned.vpcf",
				"EffectAttachType": "follow_overhead",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"duration": 1,
			},
		},
	},
	"images": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/images",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"HotKeyOverride": "W",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCooldown": 30,
		"AbilityManaCost": "80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250 260 270",
		"Precache": {
			"particle": "particles/heroes/juggernaut/mirror_image.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_naga_siren.vsndevts",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"ModifierName": "modifier_images",
				"Target": "CASTER",
				"Duration": 0.3,
			},
		},
		"OnUpgrade": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/juggernaut.lua",
				"Function": "OnUpgrade",
			},
		},
		"Modifiers": {
			"modifier_images": {
				"Passive": 0,
				"IsHidden": 1,
				"States": {
					"MODIFIER_STATE_INVULNERABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_LOW_ATTACK_PRIORITY": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_HEALTH_BAR": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_UNSELECTABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"OnCreated": {
					"AttachEffect": {
						"Target": "CASTER",
						"EffectName": "particles/heroes/juggernaut/mirror_image.vpcf",
						"EffectAttachType": "attach_origin",
					},
					"FireSound": {
						"Target": "CASTER",
						"EffectName": "Hero_NagaSiren.MirrorImage",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/juggernaut.lua",
						"Function": "MirrorImage",
					},
				},
			},
			"modifier_images_buff": {
				"States": {
					"MODIFIER_STATE_MAGIC_IMMUNE": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Duration": 2,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 30,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"output_damage": "-45 -40 -35 -30 -25 -20 -15 -10 -5 0 5 10 15 20 25 30 35 40 45 50",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"input_damage": 1,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"images_count": "1 1 1 1 2 2 2 2 3 3 3 3 4 4 4 4 5 5 5 5",
			},
		},
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilityDuration": 10,
	},
	"endless_ignite": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "endless_ignite",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "E",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"precache": {
			"particle": "particles/skills/ignite_fire_odl.vpcf",
		},
		"Modifiers": {
			"modifier_ignite": {
				"Passive": 1,
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/lilith.lua",
						"Function": "OnAttackLanded",
						"DamageTaken": "%attack_damage",
					},
				},
				"AllowIllusionDuplicate": 0,
				"IsHidden": 1,
				"OnCreated": {
					"AttachEffect": {
						"Target": "CASTER",
						"EffectName": "particles/skills/ignite_hand.vpcf",
						"EffectAttachType": "start_at_customorigin",
						"ControlPointEntities": {
							"CASTER": "attach_attack2",
						},
					},
				},
			},
			"modifier_ignite_debuff": {
				"Properties": {
				},
				"IsHidden": 0,
				"AllowIllusionDuplicate": 0,
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/lilith.lua",
						"Function": "OnIntervalThink",
					},
				},
				"ThinkInterval": "%interval",
				"IsDebuff": 1,
				"EffectName": "particles/skills/ignite_fire_odl.vpcf",
				"EffectAttachType": "attach_hitloc",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"damage": "0.25 0.5 0.75 1.0 1.25 1.5 1.75 2 2.25 2.5 2.75 3.0 3.25 3.5 3.75 4.0 4.25 4.5 4.75 5.0",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_attack_speed": 10,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 5,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"interval": 1,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"ignite_count": 1,
			},
		},
	},
	"jianrenfengbao": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/jianrenfengbao",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "R",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastPoint": 0,
		"AbilityCastAnimation": "ACT_DOTA_OVERRIDE_ABILITY_1",
		"AbilityCooldown": 120,
		"AbilityManaCost": 110,
		"AbilityCastRange": 400,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_ember_spirit.vsndevts",
		},
		"OnSpellStart": {
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_EmberSpirit.FlameGuard.Cast",
			},
			"ApplyModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_jianrenfengbao",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/juggernaut.lua",
				"Function": "jianrenfengbao",
				"Target": "CASTER",
			},
		},
		"Modifiers": {
			"modifier_jianrenfengbao": {
				"Duration": "%duration",
				"OverrideAnimation": "ACT_DOTA_OVERRIDE_ABILITY_1",
				"States": {
					"MODIFIER_STATE_DISARMED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_MAGIC_IMMUNE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_SILENCED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": 2000,
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"duration": 6,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 500,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage": "24 48 72 96 120 144 168 192",
			},
		},
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilityDuration": 9,
	},
	"demon_hunter": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "demon_hunter",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"HotKeyOverride": "D",
		"MaxLevel": 1,
		"AbilityCooldown": 10,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_terrorblade.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
				"Function": "DemonHunterSpell",
			},
		},
		"Modifiers": {
			"modifier_demon_hunter": {
				"Passive": 1,
				"IsHidden": 1,
				"OnKill": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
						"Function": "DemonHunter",
					},
				},
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
						"Function": "AutoCast",
					},
				},
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT | MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE",
			},
			"modifier_demon_hunter_buff": {
				"IsHidden": 0,
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT",
				"Properties": {
					"MODIFIER_PROPERTY_STATS_STRENGTH_BONUS": "%stats",
					"MODIFIER_PROPERTY_STATS_AGILITY_BONUS": "%stats",
					"MODIFIER_PROPERTY_STATS_INTELLECT_BONUS": "%stats",
				},
			},
			"modifier_demon_hunter_spell": {
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"stats": 1,
			},
		},
	},
	"soulblade": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "soulblade",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.1,
		"AbilityCooldown": 6,
		"AbilityManaCost": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_terrorblade.vsndevts",
		},
		"OnSpellStart": {
			"FireSound": {
				"EffectName": "Hero_Terrorblade_Morphed.Attack",
				"Target": "CASTER",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
				"Function": "SoulBlade",
				"Target": "POINT",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"damage": "3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800 850 900 950 1000",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 500,
			},
		},
	},
	"soulring": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "soulring",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "W",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_OVERRIDE_ABILITY_4",
		"AbilityCooldown": 45,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"precache": {
			"particle": "particles/skills/dh_soulringrope.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_terrorblade.vsndevts",
		},
		"OnSpellStart": {
			"FireSound": {
				"EffectName": "Hero_Terrorblade_Morphed.Attack",
				"Target": "CASTER",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
				"Function": "SoulRing",
				"Damage": "%damage",
				"Radius": "%radius",
			},
			"ApplyModifier": {
				"ModifierName": "modifier_soulring",
				"Target": "CASTER",
				"Duration": "%duration",
			},
		},
		"Modifiers": {
			"modifier_soulring": {
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 400,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 15,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "10 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200",
			},
		},
	},
	"magic_blade": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "magic_blade",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "E",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"precache": {
			"particle": "particles/econ/items/antimage/antimage_weapon_basher_ti5/am_manaburn_basher_ti_5.vpcf",
		},
		"Modifiers": {
			"modifier_magic_blade": {
				"IsHidden": 1,
				"Passive": 1,
				"OnDealDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
						"Function": "MagicBlade",
					},
				},
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
						"Function": "OnCreated",
					},
				},
			},
			"modifier_magic_blade_buff": {
				"IsHidden": 0,
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT",
				"Properties": {
					"MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE": 1,
				},
			},
			"modifier_magic_blade_debuff": {
				"IsHidden": 0,
				"Duration": "%duration",
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT",
				"Properties": {
					"MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE": -1,
				},
				"IsDebuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"attack": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 5,
			},
		},
	},
	"metamorphosis": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "metamorphosis",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "R",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastPoint": 0.3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCooldown": 120,
		"AbilityManaCost": "300 450 600 750 900 1050 1200 1350",
		"precache": {
			"particle": "particles/skills/metamorphosis_pnt.vpcf",
			"model": "models/heroes/terrorblade/demon.vmdl",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_death_prophet.vsndevts",
		},
		"OnSpellStart": {
			"FireSound": {
				"EffectName": "Hero_DeathProphet.Exorcism.Cast",
				"Target": "CASTER",
			},
			"FireEffect": {
				"EffectName": "particles/units/heroes/hero_terrorblade/terrorblade_metamorphosis_transform.vpcf",
				"EffectAttachType": "follow_origin",
				"Target": "CASTER",
			},
			"ApplyModifier": {
				"ModifierName": "modifier_exorcism",
				"Target": "CASTER",
				"Duration": "%duration",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
				"Function": "ExorcismDeath",
			},
			"RemoveModifier": {
				"ModifierName": "modifier_exorcism",
				"Target": "CASTER",
			},
		},
		"Modifiers": {
			"modifier_metamorphosis": {
				"Duration": "%duration",
				"EffectName": "particles/units/heroes/hero_terrorblade/terrorblade_metamorphosis.vpcf",
				"EffectAttachType": "follow_origin",
				"AllowsIllusionDuplicate": 1,
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
						"Function": "MetamorphosisDamage",
						"DamageTaken": "%attack_damage",
						"Radius": "%cleave_radius",
					},
				},
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
						"Function": "HideWearables",
					},
					"AttachEffect": {
						"EffectName": "particles/units/heroes/hero_terrorblade/terrorblade_metamorphosis_ambient.vpcf",
						"EffectAttachType": "follow_origin",
						"Target": "TARGET",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_ATTACK_RANGE_BONUS": "%bonus_range",
					"MODIFIER_PROPERTY_BASEATTACK_BONUSDAMAGE": "%bonus_damage",
					"MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT": "%base_attack_time",
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
						"Function": "ShowWearables",
					},
				},
			},
			"modifier_exorcism": {
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
						"Function": "ExorcismStart",
					},
					"FireSound": {
						"EffectName": "Hero_DeathProphet.Exorcism",
						"Target": "CASTER",
					},
				},
				"OnAttackStart": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
						"Function": "ExorcismAttack",
					},
				},
				"OnDeath": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
						"Function": "ExorcismDeath",
					},
					"FireSound": {
						"EffectName": "Hero_DeathProphet.Death",
						"Target": "CASTER",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
						"Function": "ExorcismEnd",
					},
				},
			},
			"modifier_exorcism_spirit": {
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/demon_hunter.lua",
						"Function": "MetamorphosisGhost",
						"Target": "TARGET",
					},
					"AttachEffect": {
						"EffectName": "particles/skills/metamorphosis_pnt.vpcf",
						"EffectAttachType": "start_at_customorigin",
						"Target": "TARGET",
						"ControlPointEntities": {
							"TARGET": "attach_origin",
						},
					},
				},
				"States": {
					"MODIFIER_STATE_INVULNERABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_HEALTH_BAR": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_UNIT_COLLISION": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NOT_ON_MINIMAP": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_UNSELECTABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_FLYING": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_DISARMED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"spirit_speed": 500,
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"max_distance": 2000,
			},
			"12": {
				"var_type": "FIELD_INTEGER",
				"give_up_distance": 1200,
			},
			"13": {
				"var_type": "FIELD_INTEGER",
				"min_damage": "53 53 53",
			},
			"14": {
				"var_type": "FIELD_INTEGER",
				"max_damage": "58 58 58",
			},
			"15": {
				"var_type": "FIELD_INTEGER",
				"heal_percent": "25 25 25",
			},
			"16": {
				"var_type": "FIELD_INTEGER",
				"average_damage": "55 55 55",
			},
			"17": {
				"var_type": "FIELD_FLOAT",
				"delay_between_spirits": 0.1,
			},
			"18": {
				"var_type": "FIELD_FLOAT",
				"min_time_between_attacks": 2.0,
			},
			"01": {
				"var_type": "FIELD_FLOAT",
				"duration": 40,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"transformation_time": 0.35,
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"base_attack_time": 1.0,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"bonus_range": 800,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"tooltip_attack_range": 550,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"bonus_damage": "400 800 1200 1600 2000 2400 2800 3200",
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"cleave_radius": 300,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"radius": "700 700 700",
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"spirits": 20,
			},
		},
	},
	"huoqiu": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/chronos_magic",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"MaxLevel": 1,
		"AbilityCastPoint": 0.0,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCooldown": 15,
		"AbilityManaCost": 0,
		"AbilityCastRange": 1400,
		"AoERadius": 400,
		"precache": {
			"particle": "particles/test/seer_fire_largefireball.vpcf",
		},
		"OnSpellStart": {
			"LinearProjectile": {
				"Target": "POINT",
				"EffectName": "particles/test/seer_fire_largefireball.vpcf",
				"MoveSpeed": 1000,
				"StartRadius": 100,
				"EndRadius": 100,
				"FixedDistance": 2000,
				"StartPosition": "attach_attack1",
				"TargetTeams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
				"TargetTypes": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
				"HasFrontalCone": 1,
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_unit.lua",
				"Function": "testskill",
			},
		},
		"OnProjectileHitUnit": {
			"DeleteOnHit": 1,
		},
	},
	"fractured_soul": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "fractured_soul",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "D",
		"MaxLevel": 1,
		"Modifiers": {
			"modifier_fractured_soul": {
				"Passive": 1,
				"OnKill": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/tartarus.lua",
						"Function": "FracturedSoul",
					},
				},
				"IsHidden": 1,
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/tartarus.lua",
						"Function": "OnAttackLanded",
					},
				},
			},
			"modifier_fractured_soul_buff": {
				"Properties": {
					"MODIFIER_PROPERTY_STATS_STRENGTH_BONUS": 1,
				},
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT",
			},
		},
	},
	"ashes": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "ashes",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "D",
		"MaxLevel": 1,
		"Modifiers": {
			"modifier_ashes": {
				"Passive": 1,
				"OnAbilityExecuted": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/lilith.lua",
						"Function": "OnAbilityExecuted",
					},
				},
				"IsHidden": 1,
			},
			"modifier_ashes_buff": {
				"Properties": {
				},
				"IsDebuff": 0,
				"IsBuff": 0,
				"Duration": "%duration",
				"ThinkInterval": "%interval",
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/lilith.lua",
						"Function": "OnCreated",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/lilith.lua",
						"Function": "OnDestroy",
					},
				},
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/lilith.lua",
						"Function": "OnIntervalThink",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 1,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"reduce": 0.5,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 10,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 350,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"interval": 1,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"ignite_count": 1,
			},
		},
	},
	"war_honor": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "war_honor",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"HotKeyOverride": "D",
		"MaxLevel": 1,
		"Modifiers": {
			"modifier_war_honor": {
				"Passive": 1,
				"OnTakeDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/hippolyta.lua",
						"Function": "WarHonor",
						"DamageTaken": "%attack_damage",
					},
				},
				"IsHidden": 1,
			},
		},
	},
	"hell_field": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "hell_field",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "W",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.3,
		"AbilityCastAnimation": "ACT_DOTA_RAZE_3",
		"AbilityCooldown": 45,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_warlock.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/tartarus.lua",
				"Function": "HellField",
				"Damage": "%damage",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Warlock.Upheaval",
			},
		},
		"Modifiers": {
			"modifier_hell_field_buff": {
				"Properties": {
					"MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE": "%bonus_regen",
				},
				"Duration": 1,
				"IsHidden": 1,
				"IsDebuff": 0,
			},
			"modifier_hell_field_debuff": {
				"Properties": {
				},
				"Duration": 1,
				"IsHidden": 0,
				"IsDebuff": 1,
				"States": {
					"MODIFIER_STATE_SILENCED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"bonus_damage_percent": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_regen": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"damage": "0.5 1 1.5 2 2.5 3 3.5 4 4.5 5 5.5 6 6.5 7 7.5 8 8.5 9 9.5 10",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "10 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200",
			},
		},
	},
	"infernal_fire": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "infernal_fire",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "E",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.3,
		"AbilityCastAnimation": "ACT_DOTA_ATTACK",
		"AbilityCooldown": 0,
		"AbilityManaCost": 0,
		"OnToggleOn": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/tartarus.lua",
				"Function": "OnToggleOn",
			},
		},
		"OnToggleOff": {
			"DeleteOnHit": 1,
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/tartarus.lua",
				"Function": "OnToggleOff",
			},
		},
		"Modifiers": {
			"modifier_infernal_fire_physics": {
				"Properties": {
				},
				"IsHidden": 0,
				"IsDebuff": 0,
				"Passive": 0,
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/tartarus.lua",
						"Function": "InfernalFirePhysics",
						"attack": "%attack",
					},
				},
				"ThinkInterval": 1,
			},
			"modifier_infernal_fire_physics_buff": {
				"Properties": {
					"MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE": 1,
				},
				"IsHidden": 1,
				"IsDebuff": 0,
			},
			"modifier_infernal_fire_magic": {
				"IsHidden": 0,
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/tartarus.lua",
						"Function": "InfernalFireMagic",
					},
					"SpendMana": {
						"Mana": "%mana_cost",
					},
				},
				"ThinkInterval": 1,
			},
			"modifier_infernal_fire": {
				"Passive": 1,
				"OnCreated": {
					"ApplyModifier": {
						"Target": "CASTER",
						"ModifierName": "modifier_infernal_fire_physics",
					},
				},
				"IsHidden": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"attack": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"mana_cost": "5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100",
			},
		},
	},
	"destory_hit": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "destory_hit",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.3,
		"AbilityCastAnimation": "ACT_DOTA_RAZE_2",
		"AbilityCooldown": 8,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/tartarus.lua",
				"Function": "DestoryHit",
			},
		},
		"Modifiers": {
			"modifier_destory_hit": {
				"IsDebuff": 1,
				"Properties": {
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"reduce_damage": 30,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"reduce_move": -30,
			},
		},
	},
	"destory_hit_up": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "nevermore_shadowraze2_demon",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.3,
		"AbilityCastAnimation": "ACT_DOTA_RAZE_2",
		"AbilityCooldown": 8,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/tartarus.lua",
				"Function": "DestoryHitUp",
			},
		},
		"Modifiers": {
			"modifier_destory_hit": {
				"IsDebuff": 1,
				"Properties": {
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"reduce_damage": 30,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"reduce_move": -30,
			},
		},
	},
	"courage_moment": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "courage_moment",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "E",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCooldown": 2,
		"precache": {
			"particle": "particles/units/courage_moment.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_legion_commander.vsndevts",
		},
		"OnProjectileHitUnit": {
			"RunScript": {
				"Function": "CourageMomentDamage",
				"ScriptFile": "scripts/vscripts/ability_hero/hippolyta.lua",
				"heal": "%heal",
			},
			"DeleteOnHit": 0,
		},
		"Modifiers": {
			"modifier_courage_moment": {
				"Passive": 1,
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/hippolyta.lua",
						"Function": "CourageMoment",
					},
				},
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/hippolyta.lua",
						"Function": "AbilityCoolDownSetting",
					},
				},
				"IsHidden": 1,
			},
			"modifier_courage_moment_buff": {
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 1000,
					"MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT": 0.1,
				},
				"EffectName": "particles/units/courage_moment.vpcf",
				"EffectAttachType": "attach_attack1",
				"Duration": 0.5,
				"OnAttackLanded": {
					"RemoveModifier": {
						"Target": "CASTER",
						"ModifierName": "modifier_courage_moment_buff",
					},
					"FireSound": {
						"Target": "CASTER",
						"EffectName": "Hero_LegionCommander.Courage",
					},
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/hippolyta.lua",
						"Function": "CourageMomentHit",
						"DamageTaken": "%attack_damage",
					},
				},
				"IsHidden": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"chance": 100,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"cooldown": 2,
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"damage": "1.25 1.5 1.75 2 2.25 2.5 2.75 3 3.25 3.5 3.75 4 4.25 4.5 4.75 5 5.25 5.5 5.75 6",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"heal": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"refresh_chance": "15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34",
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "80 160 240 320 400 480 560 640 720 800 880 960 1040 1120 1200 1280 1360 1440 1520 1600",
			},
		},
	},
	"war_arua": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "war_arua",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "W",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCooldown": 30,
		"precache": {
			"particle": "particles/econ/items/magnataur/shock_of_the_anvil/magnataur_shockanvil.vpcf",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"Target": {
					"Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
					"Teams": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
					"Center": "CASTER",
					"Radius": 900,
				},
				"ModifierName": "modifier_war_arua_undying",
			},
			"DeleteOnHit": 0,
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/hippolyta.lua",
				"Function": "WarAuraActivity",
			},
		},
		"Modifiers": {
			"modifier_war_arua": {
				"Passive": 1,
				"Aura": "modifier_war_arua_buff",
				"Aura_Radius": 900,
				"Aura_Teams": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
				"Aura_Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
				"Aura_ApplyToCaster": 1,
				"IsHidden": 1,
			},
			"modifier_war_arua_buff": {
				"Properties": {
					"MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE": "%damage_percent",
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%attackspeed",
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": "%movespeed",
				},
				"IsHidden": 0,
			},
			"modifier_war_arua_undying": {
				"Duration": "%duration",
				"Properties": {
					"MODIFIER_PROPERTY_MIN_HEALTH": 10,
				},
			},
			"modifier_war_arua_caster": {
				"Properties": {
					"MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE": "%damage_percent",
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%attackspeed",
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": "%movespeed",
					"MODIFIER_PROPERTY_MIN_HEALTH": 10,
				},
				"Duration": "%duration",
				"IsHidden": 1,
				"Attributes": "MODIFIER_ATTRIBUTE_MULTIPLE",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage_percent": "3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "10 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"health": "1 2 3 4 5 6  8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100",
			},
			"05": {
				"var_type": "FIELD_FLOAT",
				"duration": "5 5.2 5.4 5.6 5.8 6 6.2 6.4 6.6 6.8 7 7.2 7.4 7.6 7.8 8 8.2 8.4 8.6 8.8",
			},
		},
	},
	"war_god": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "war_god",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"HotKeyOverride": "R",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCooldown": 45,
		"precache": {
			"particle": "particles/units/war_god_eye.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_sven.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"Function": "WarGodActive",
				"ScriptFile": "scripts/vscripts/ability_hero/hippolyta.lua",
			},
			"DeleteOnHit": 0,
		},
		"Modifiers": {
			"modifier_war_god": {
				"Passive": 0,
				"OnAttacked": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/hippolyta.lua",
						"Function": "WarGod",
					},
				},
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_DISABLED",
					"MODIFIER_STATE_SILENCED": "MODIFIER_STATE_VALUE_DISABLED",
				},
				"Properties": {
					"MODIFIER_PROPERTY_STATS_STRENGTH_BONUS": "%str",
				},
				"OnKill": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/hippolyta.lua",
						"Function": "WarGodKill",
					},
				},
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/hippolyta.lua",
						"Function": "WarGodStr",
					},
					"FireSound": {
						"Target": "CASTER",
						"EffectName": "Hero_Sven.GodsStrength",
					},
					"FireEffect": {
						"Target": "CASTER",
						"ControlPointEntities": {
							"CASTER": "attach_eyeR",
						},
						"EffectName": "particles/units/war_god_eye.vpcf",
						"EffectAttachType": "start_at_customorigin",
					},
				},
				"StatusEffectName": "particles/status_fx/status_effect_life_stealer_rage.vpcf",
				"StatusEffectPriority": 10,
				"Duration": 5,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"str": 50,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"chance": "15 20 25 30 35 40 45 50",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"heal": 20,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"str_percent": "0.04 0.08 0.12 0.16 0.20 0.24 0.28 0.32",
			},
		},
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
	},
	"queen_curse": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "queen_curse",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCooldown": 30,
		"precache": {
			"particle": "particles/units/heroes/hero_axe/axe_beserkers_call.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_legion_commander.vsndevts",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_queen_curse",
			},
			"DeleteOnHit": 0,
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_LegionCommander.Duel.Victory",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/hippolyta.lua",
				"Function": "QueenCurseEffect",
			},
		},
		"Modifiers": {
			"modifier_queen_curse": {
				"Passive": 0,
				"Duration": "%duration",
				"Properties": {
					"MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE": "%regen",
					"MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE": "%critical",
				},
				"EffectName": "particles/units/heroes/hero_legion_commander/legion_commander_press.vpcf",
				"EffectAttachType": "follow_origin",
			},
			"modifier_queen_curse_debuff": {
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": 200,
					"MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS": "%armor",
				},
				"EffectName": "particles/units/heroes/hero_axe/axe_beserkers_call.vpcf",
				"EffectAttachType": "attach_hitloc",
				"IsHidden": 0,
				"IsDebuff": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/hippolyta.lua",
						"Function": "QueenCurse",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/hippolyta.lua",
						"Function": "QueenCurseRemove",
					},
				},
				"States": {
					"MODIFIER_STATE_SILENCED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": "300 330 360 390 420 450 480 510 540 570 600 630 660 690 720 750 780 810 840 870",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": 12,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"regen": "1 2 3 4 5 6  8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"critical": 250,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"armor": "-3 -6 -9 -12 -15 -18 -21 -24 -27 -30 -33 -36 -39 -42 -45 -48 -51 -54 -57 -60",
			},
		},
	},
	"revelater_2": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "custom/revelater_2",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_OPTIONAL_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "W",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.1,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCooldown": 6,
		"AbilityManaCost": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
		"AbilityCastRange": 1600,
		"precache": {
			"particle": "particles/heroes/revelater/revelater_motion.vpcf",
		},
		"OnSpellStart": {
			"RunScript": {
				"Target": "POINT",
				"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
				"Function": "OnCastAbility",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_FacelessVoid.TimeDilation.Cast",
			},
		},
		"OnProjectileHitUnit": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
				"Function": "OnProjectileHitUnit",
			},
			"DeleteOnHit": 0,
		},
		"Modifiers": {
			"modifier_revelater_motion": {
				"OnCreated": {
					"RunScript": {
						"Target": "TARGET",
						"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
						"Function": "MotionControler",
					},
				},
				"EffectName": "particles/heroes/revelater/revelater_motion.vpcf",
				"EffectAttachType": "follow_origin",
				"IsHidden": 1,
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT",
			},
			"modifier_revelater_buff": {
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": "%movespeed",
				},
				"IsHidden": 0,
			},
			"modifier_revelater_cooldown": {
				"Passive": 1,
				"IsHidden": 0,
				"ThinkInterval": 6,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
						"Function": "OnCreated",
					},
				},
			},
			"modifier_revelater_stun": {
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"EffectName": "particles/generic_gameplay/generic_stunned.vpcf",
				"EffectAttachType": "follow_overhead",
			},
			"modifier_revelater_motion_caster": {
				"OnCreated": {
					"RunScript": {
						"Target": "TARGET",
						"Function": "MotionControler",
						"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
					},
				},
				"EffectName": "particles/heroes/revelater/revelater_motion.vpcf",
				"EffectAttachType": "follow_origin",
				"IsHidden": 1,
				"States": {
					"MODIFIER_STATE_MAGIC_IMMUNE": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"speed": 1600,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"distance": 800,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "55 60 65 70 75 80 85 90 95 100 105 110 115 120 125 130 135 140 145 150",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
		},
	},
	"revelater_1": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "revelater_1",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.1,
		"AbilityCastAnimation": "ACT_DOTA_ATTACK",
		"AbilityCooldown": 8,
		"AbilityManaCost": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
		"AbilityCastRange": 800,
		"precache": {
			"particle": "particles/heroes/revelater/revelater_cash.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_templar_assassin.vsndevts",
		},
		"OnSpellStart": {
			"TrackingProjectile": {
				"Target": "TARGET",
				"MoveSpeed": 2000,
				"SourceAttachment": "DOTA_PROJECTILE_ATTACHMENT_ATTACK_1",
				"VisionRadius": 300,
				"ProvidesVision": 1,
				"Dodgeable": 1,
				"EffectName": "particles/heroes/revelater/revelater_cash.vpcf",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
				"Function": "OnCastAbility",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_TemplarAssassin.Meld.Attack",
			},
		},
		"OnProjectileHitUnit": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
				"Function": "OnProjectileHitUnit",
			},
		},
		"Modifiers": {
			"modifier_revelater_attackspeed": {
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": -1,
				},
				"IsHidden": 1,
			},
			"modifier_revelater_movespeed": {
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": -1,
				},
				"IsHidden": 1,
			},
			"modifier_revelater_damage": {
				"Properties": {
					"MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE": 1,
					"MODIFIER_PROPERTY_TOTALDAMAGEOUTGOING_PERCENTAGE": -1,
				},
				"IsHidden": 1,
			},
			"modifier_revelater_attack": {
				"Properties": {
				},
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
						"Function": "OnAttackLanded",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": 5,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"distance": 600,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"angle": 45,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
		},
	},
	"chilliness_burst": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "crystal_maiden_crystal_nova_icecowl",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "W",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.2,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCooldown": 8,
		"AbilityManaCost": "80 85 90 95 100 105 110 115 120 125 130 135 140 145 150 155 160 165 170 175",
		"precache": {
			"particle": "particles/units/heroes/hero_ancient_apparition/ice_temp.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_crystalmaiden.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/crystal_maiden.lua",
				"Function": "ChillinessBurst",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Crystal.CrystalNova",
			},
		},
		"Modifiers": {
			"modifier_chilliness_burst_debuff": {
				"IsDebuff": 1,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": -1,
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": -1,
				},
			},
			"modifier_chilliness_burst_frozen": {
				"IsDebuff": 1,
				"Properties": {
				},
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/crystal_maiden.lua",
						"Function": "OnFrozenRemove",
					},
				},
				"IsPurgable": 0,
				"EffectName": "particles/units/heroes/hero_ancient_apparition/ice_temp.vpcf",
				"EffectAttachType": "follow_origin",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "200 400 600 800 1000 1200 1400 1600 1800 2000 2200 2400 2600 2800 3000 3200 3400 3600 3800 4000",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"frozen_duration": "0.25 0.3 0.35 0.4 0.45 0.5 0.55 0.6 0.65 0.7 0.75 0.8 0.85 0.9 0.95 1 1.05 1.1 1.15 1.2",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"duration": 6,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 105 110 115 120",
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 105 110 115 120",
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"radius": 900,
			},
		},
	},
	"snowstorm": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "snowstorm",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "E",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0.2,
		"AbilityCastAnimation": "ACT_DOTA_ATTACK",
		"AbilityCooldown": 18,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityCastRange": 800,
		"AOERadius": 400,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_morphling.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"Target": "POINT",
				"ScriptFile": "scripts/vscripts/ability_hero/crystal_maiden.lua",
				"Function": "Snowstorm",
			},
		},
		"Modifiers": {
			"modifier_snowstorm_debuff": {
				"IsDebuff": 1,
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": "%movespeed",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800 850 900 950 1000",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 6,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"single_radius": 180,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"radius": 400,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"movespeed": -25,
			},
			"07": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.4,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"bonus_rate": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"slow_duration": 3,
			},
		},
	},
	"frozen_aura": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "frozen_aura",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"HotKeyOverride": "R",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastPoint": 0,
		"AbilityCastAnimation": "ACT_DOTA_ATTACK",
		"AbilityCooldown": 30,
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/crystal_maiden.lua",
				"Function": "FrozenAuraActive",
			},
		},
		"Modifiers": {
			"modifier_frozen_aura": {
				"Passive": 1,
				"Aura": "modifier_frozen_aura_buff",
				"Aura_Radius": 900,
				"Aura_Teams": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
				"Aura_Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
				"IsHidden": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/crystal_maiden.lua",
						"Function": "ApplyNoCooldown",
					},
				},
			},
			"modifier_frozen_aura_buff": {
				"IsBuff": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/crystal_maiden.lua",
						"Function": "CreateFrozenAura",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/crystal_maiden.lua",
						"Function": "RemoveFrozenAura",
					},
				},
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT",
				"OnAbilityExecuted": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/crystal_maiden.lua",
						"Function": "RegenMana",
					},
				},
			},
			"modifier_frozen_aura_active": {
				"Passive": 0,
				"Aura": "modifier_frozen_aura_buff_active",
				"Aura_Radius": 90000,
				"Aura_Teams": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
				"Aura_Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
				"IsHidden": 1,
			},
			"modifier_frozen_aura_buff_active": {
				"IsBuff": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/crystal_maiden.lua",
						"Function": "CreateFrozenAuraActive",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/crystal_maiden.lua",
						"Function": "RemoveFrozenAuraActive",
					},
				},
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT",
				"OnAbilityExecuted": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/crystal_maiden.lua",
						"Function": "RegenMana",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"reduce": "0.11 0.12 0.13 0.14 0.15 0.16 0.17 0.18 0.19 0.2 0.21 0.22 0.23 0.24 0.25 0.26 0.27 0.28 0.29 0.3",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": 12,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 900,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"regen_rate": "15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53",
			},
		},
	},
	"revelater_4": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "revelater_4",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "R",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCooldown": 60,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"precache": {
			"particle": "particles/heroes/revelater/revelater_trail_ultimate.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_templar_assassin.vsndevts",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_revelater_4",
				"Duration": 12,
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Terrorblade.Sunder.Cast",
			},
		},
		"Modifiers": {
			"modifier_revelater_4": {
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
						"Function": "OnCreated",
					},
				},
				"OnTakeDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
						"Function": "OnTakeDamage",
						"DamageTaken": "%attack_damage",
					},
				},
				"OnDestroy": {
					"FireSound": {
						"Target": "CASTER",
						"EffectName": "Hero_TemplarAssassin.Refraction.Absorb",
					},
				},
			},
			"modifier_revelater_4_stun": {
				"Properties": {
				},
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Duration": 0.01,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16",
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"damage_absorb": "0.225 0.25 0.275 0.3 0.325 0.35 0.375 0.4 0.425 0.45 0.475 0.5 0.525 0.55 0.575 0.6 0.625 0.65 0.675 0.7",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "400 800 1200 1600 2000 2400 2800 3200",
			},
		},
	},
	"chilling_touch": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "chilling_touch",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "D",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCooldown": 30,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"precache": {
			"particle": "particles/generic_hero_status/status_invisibility_start.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_ancient_apparition.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/crystal_maiden.lua",
				"Function": "ChillingTouch",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Ancient_Apparition.ChillingTouchCast",
			},
		},
		"Modifiers": {
			"modifier_chilling_touch": {
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": 1000,
				},
				"States": {
					"MODIFIER_STATE_NO_UNIT_COLLISION": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_INVISIBLE": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"IsHidden": 0,
				"IsBuff": 1,
				"StatusEffectName": "particles/generic_hero_status/status_invisibility_start.vpcf",
			},
			"modifier_chilling_touch_debuff": {
				"IsDebuff": 1,
				"Properties": {
					"MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE": "%damage_up",
				},
				"Duration": "%curse_duration",
			},
			"modifier_chilling_touch_freeze": {
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_FROZEN": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"IsDebuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage_up": "50 75 100 125 150 175 200 225",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 900,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "200 400 600 800 1000 1200 1400 1600",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"duration": 8,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"curse_duration": 4,
			},
		},
	},
	"revelater_0": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "revelater_0",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"HotKeyOverride": "D",
		"MaxLevel": 1,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_templar_assassin.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
				"Function": "OnCastAbility",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_TemplarAssassin.Refraction",
			},
		},
		"Modifiers": {
			"modifier_revelater_0": {
				"OnTakeDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
						"Function": "OnTakeDamage",
						"DamageTaken": "%attack_damage",
					},
				},
				"Passive": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
						"Function": "OnCreated",
					},
				},
				"IsHidden": 1,
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
						"Function": "OnIntervalThink",
					},
				},
				"ThinkInterval": 4,
			},
			"modifier_revelater_0_absorb": {
				"Properties": {
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL": 1,
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL": 1,
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE": 1,
				},
				"States": {
				},
				"IsHidden": 1,
			},
			"modifier_revelater_0_buff": {
				"IsHidden": 1,
			},
			"modifier_revelater_0_invisible": {
				"States": {
					"MODIFIER_STATE_INVISIBLE": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Properties": {
				},
				"StatusEffectName": "particles/generic_hero_status/status_invisibility_start.vpcf",
				"IsHidden": 1,
			},
		},
	},
	"frost_sigil": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "frost_sigil",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
		"HotKeyOverride": "Q",
		"MaxLevel": 1,
		"AbilityCooldown": 15,
		"AbilityCastRange": 1200,
		"precache": {
			"particle": "particles/econ/items/winter_wyvern/winter_wyvern_ti7/wyvern_cold_embrace_ti7buff.vpcf",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"Target": "TARGET",
				"ModifierName": "modifier_frost_sigil_buff",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/crystal_maiden.lua",
				"Function": "OnSpellStart",
			},
		},
		"Modifiers": {
			"modifier_frost_sigil": {
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/crystal_maiden.lua",
						"Function": "FrostSigilCreate",
					},
				},
				"Passive": 1,
				"IsHidden": 1,
				"OnAbilityExecuted": {
					"RunScript": {
						"Function": "FrostSigilCast",
						"ScriptFile": "scripts/vscripts/ability_hero/crystal_maiden.lua",
					},
				},
			},
			"modifier_frost_sigil_buff": {
				"Properties": {
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL": 1,
				},
				"States": {
					"MODIFIER_STATE_FROZEN": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_ROOTED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_SOFT_DISARMED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Duration": "%duration",
				"EffectName": "particles/econ/items/winter_wyvern/winter_wyvern_ti7/wyvern_cold_embrace_ti7buff.vpcf",
				"EffectAttachType": "attach_origin",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 5,
			},
		},
	},
	"piercing_eye": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "piercing_eye_backup",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
		"HotKeyOverride": "Q",
		"MaxLevel": 1,
		"precache": {
			"particle": "particles/units/heroes/hero_tusk/tusk_frozen_sigil.vpcf",
		},
		"Modifiers": {
			"modifier_piercing_eye": {
				"Passive": 1,
				"IsHidden": 1,
				"AllowIllusionDuplicate": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/monkey_king.lua",
						"Function": "OnCreated",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"damage_reduce": 0.5,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage_deep": 2,
			},
		},
	},
	"revelater_3": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "revelater_3",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "E",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_ATTACK",
		"AbilityCooldown": 8,
		"AbilityManaCost": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
		"precache": {
			"soundfile": "soundevents/game_sounds_items.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
				"Function": "OnCastAbility",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "DOTA_Item.AbyssalBlade.Activate",
			},
		},
		"Modifiers": {
			"modifier_revelater_3": {
				"OnAttackLanded": {
					"ApplyModifier": {
						"Target": "TARGET",
						"ModifierName": "modifier_revelater_armor",
					},
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/revelater.lua",
						"DamageTaken": "%attack_damage",
						"Function": "OnAttackLanded",
					},
				},
				"Passive": 1,
				"IsHidden": 1,
			},
			"modifier_revelater_armor": {
				"Properties": {
					"MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS": "%resistance",
				},
				"Duration": 10,
				"IsDebuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"resistance": "-5 -10 -15 -20 -25 -30 -35 -40 -45 -50 -55 -60 -65 -70 -75 -80 -85 -90 -95 -100",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 300,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage": "4 8 12 16 20 24 28 32 36 40 44 48 52 56 60 64 68 72 76 80",
			},
		},
	},
	"endless_offensive": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "endless_offensive",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "D",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "mk_attack_01_near",
		"AbilityCooldown": 20,
		"AbilityManaCost": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
		"precache": {
			"particle": "particles/units/heroes/hero_monkey_king/monkey_king_quad_tap_start.vpcf",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_endless_offensive_buff",
				"Duration": "%duration",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/monkey_king.lua",
				"Function": "EndlessOffensiveActive",
			},
			"AttachEffect": {
				"Target": "CASTER",
				"EffectName": "particles/units/heroes/hero_monkey_king/monkey_king_quad_tap_start.vpcf",
				"EffectAttachType": "attach_origin",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_MonkeyKing.IronCudgel",
			},
		},
		"Modifiers": {
			"modifier_endless_offensive": {
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/monkey_king.lua",
						"Function": "EndlessOffensiveCleave",
						"DamageTaken": "%attack_damage",
					},
				},
				"Passive": 1,
				"IsHidden": 1,
				"AllowIllusionDuplicate": 1,
				"OnCreated": {
					"RunScript": {
						"Function": "EndlessOffensiveCreate",
						"ScriptFile": "scripts/vscripts/ability_hero/monkey_king.lua",
					},
				},
			},
			"modifier_endless_offensive_buff": {
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/monkey_king.lua",
						"Function": "EndlessOffensive",
					},
				},
				"OnAttackStart": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/monkey_king.lua",
						"Function": "AttackEffect",
					},
				},
				"Properties": {
				},
				"States": {
				},
			},
			"modifier_endless_offensive_illusion": {
				"Properties": {
				},
				"States": {
					"MODIFIER_STATE_NOT_ON_MINIMAP": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_HEALTH_BAR": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_ATTACK_IMMUNE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_UNSELECTABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_UNIT_COLLISION": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_COMMAND_RESTRICTED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_MAGIC_IMMUNE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_INVULNERABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_OUT_OF_GAME": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/monkey_king.lua",
						"Function": "IllusionAttack",
					},
				},
				"OnAttackStart": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/monkey_king.lua",
						"Function": "AttackEffect",
					},
				},
			},
			"modifier_endless_offensive_debuff": {
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_COMMAND_RESTRICTED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NOT_ON_MINIMAP": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_UNIT_COLLISION": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_UNSELECTABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_INVULNERABLE": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Properties": {
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"near_angle": 360,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"mid_angle": 270,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"far_angle": 180,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"near_range": 150,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"mid_range": 225,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"far_range": 300,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"cleave_damage": "60 80 100 120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440",
			},
			"08": {
				"var_type": "FIELD_FLOAT",
				"duration": "6.5 7 7.5 8 8.5 9 9.5 10 10.5 11 11.5 12 12.5 13 13.5 14 14.5 15 15.5 16",
			},
		},
	},
	"holy_attack": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "chen_test_of_faith",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
		"MaxLevel": 5,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_chen.vsndevts",
			"particle": "particles/units/heroes/hero_chen/chen_teleport_flash.vpcf",
		},
		"Modifiers": {
			"modifier_holy_attack": {
				"OnAttackLanded": {
					"Random": {
						"OnSuccess": {
							"RunScript": {
								"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_32.lua",
								"Function": "HolyAttack",
							},
							"FireSound": {
								"Target": "TARGET",
								"EffectName": "c",
							},
							"AttachEffect": {
								"Target": "TARGET",
								"ControlPoints": {
								},
								"ControlPointEntities": {
								},
								"EffectName": "particles/units/heroes/hero_chen/chen_teleport_flash.vpcf",
								"EffectAttachType": "attach_origin",
							},
						},
						"Chance": "%chance",
					},
				},
				"Passive": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"chance": "3 6 9 12 15",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "5000 10000 15000 20000 25000",
			},
		},
	},
	"holy_armor": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "chen_penitence",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.25,
		"AbilityCooldown": "20 19 18 17 16",
		"AbilityManaCost": 200,
		"precache": {
			"particle": "particles/units/wave_32/holy_armor_a.vpcf",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_holy_armor_buff",
			},
		},
		"Modifiers": {
			"modifier_holy_armor": {
				"OnTakeDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_32.lua",
						"Function": "HolyArmorAI",
					},
				},
				"IsHidden": 1,
				"Passive": 1,
			},
			"modifier_holy_armor_buff": {
				"Duration": "%duration",
				"States": {
				},
				"Properties": {
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL": 1,
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL": 1,
					"MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE": 1,
				},
				"IsPurgable": 1,
				"IsBuff": 1,
				"EffectName": "particles/units/wave_32/holy_armor_a.vpcf",
				"EffectAttachType": "follow_origin",
				"OnCreated": {
					"FireSound": {
						"Target": "CASTER",
						"EffectName": "sounds/weapons/hero/chen/penitence_cast.vsnd",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": "4 5 6 7 8",
			},
		},
	},
	"tt1": {
		"BaseClass": "ability_datadriven",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityType": "DOTA_ABILITY_TYPE_ATTRIBUTES",
	},
	"tt2": {
		"BaseClass": "ability_datadriven",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityType": "DOTA_ABILITY_TYPE_ATTRIBUTES",
	},
	"tt3": {
		"BaseClass": "ability_datadriven",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityType": "DOTA_ABILITY_TYPE_ATTRIBUTES",
	},
	"tt4": {
		"BaseClass": "ability_datadriven",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityType": "DOTA_ABILITY_TYPE_ATTRIBUTES",
	},
	"tt5": {
		"BaseClass": "ability_datadriven",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityType": "DOTA_ABILITY_TYPE_ATTRIBUTES",
	},
	"tt6": {
		"BaseClass": "ability_datadriven",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityType": "DOTA_ABILITY_TYPE_ATTRIBUTES",
	},
	"tt7": {
		"BaseClass": "ability_datadriven",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityType": "DOTA_ABILITY_TYPE_ATTRIBUTES",
	},
	"tt8": {
		"BaseClass": "ability_datadriven",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityType": "DOTA_ABILITY_TYPE_ATTRIBUTES",
	},
	"quest_aura": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "bounty_hunter_track",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"precache": {
			"particle": "particles/map/quest.vpcf",
		},
		"Modifiers": {
			"modifier_quest_aura": {
				"Passive": 1,
				"IsHidden": 0,
				"Aura": "modifier_quest_aura_buff",
				"Aura_Radius": 400,
				"Aura_Teams": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
				"Aura_Types": "DOTA_UNIT_TARGET_HERO",
				"States": {
					"MODIFIER_STATE_INVULNERABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_HEALTH_BAR": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Properties": {
				},
				"Aura_ApplyToCaster": 0,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "QuestInit",
					},
					"DelayedAction": {
						"Action": {
							"AttachEffect": {
								"Target": "CASTER",
								"ControlPoints": {
								},
								"ControlPointEntities": {
								},
								"EffectAttachType": "follow_overhead",
								"EffectName": "particles/map/quest.vpcf",
							},
						},
						"Delay": 10,
					},
				},
			},
			"modifier_quest_aura_buff": {
				"IsHidden": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/libraries/quest.lua",
						"Function": "QuestTriggerNpc",
					},
				},
				"Passive": 0,
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/libraries/quest.lua",
						"Function": "OnDestroy",
					},
				},
			},
		},
	},
	"bash": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "bounty_hunter_twinblade_jinada",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"Modifiers": {
			"modifier_bash_debuff": {
				"IsDebuff": 1,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%slow",
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE": "%slow",
				},
			},
			"modifier_bash": {
				"Passive": 1,
				"States": {
				},
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": 100,
				},
				"OnAttackStart": {
					"RemoveModifier": {
						"Target": "CASTER",
						"ModifierName": "modifier_bash_cri",
					},
					"Random": {
						"OnSuccess": {
							"ApplyModifier": {
								"Target": "CASTER",
								"ModifierName": "modifier_bash_cri",
							},
							"RunScript": {
								"ScriptFile": "scripts/vscripts/ability_unit/trial/bash.lua",
								"Function": "OnAttack",
							},
						},
						"Chance": "%chance",
						"PseudoRandom": "DOTA_PSEUDO_RANDOM_JUGG_CRIT",
					},
				},
			},
			"modifier_bash_cri": {
				"Properties": {
					"MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE": "%damage",
				},
				"OnAttackLanded": {
					"RemoveModifier": {
						"Target": "CASTER",
						"ModifierName": "modifier_bash_cri",
					},
					"ApplyModifier": {
						"Target": "TARGET",
						"ModifierName": "modifier_bash_debuff",
						"Duration": "%duration",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"chance": 25,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": 500,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"slow": -50,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"duration": 2,
			},
		},
	},
	"mana_break": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "ghost_frost_attack",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"Modifiers": {
			"modifier_mana_break": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"Random": {
						"OnSuccess": {
							"RunScript": {
								"ScriptFile": "scripts/vscripts/ability_unit/trial/mana_break.lua",
								"Function": "ManaBreak",
							},
						},
						"Chance": "%chance",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"chance": 25,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"mana": 30,
			},
		},
	},
	"trial": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "brewmaster_primal_split",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
	},
	"shield_block": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "pangolier_shield_crash",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityCastPoint": 0.2,
		"AbilityCooldown": 6,
		"precache": {
			"particle": "particles/units/heroes/hero_pangolier/pangolier_tailthump_buff_parent.vpcf",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_unit/trial/shield_block.lua",
				"Function": "OnSpellStart",
			},
		},
		"Modifiers": {
			"modifier_shield_block": {
				"Passive": 1,
				"OnTakeDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/trial/shield_block.lua",
						"Function": "ShieldBlockAI",
					},
				},
				"IsDebuff": 0,
				"IsHidden": 1,
			},
			"modifier_shield_block_buff": {
				"Duration": "%duration",
				"Passive": 0,
			},
			"modifier_shield_block_debuff": {
				"Duration": "%stun_duration",
				"IsDebuff": 1,
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
			"modifier_shield_block_attackspeed": {
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%attackspeed",
				},
				"Duration": "%attackspeed_duration",
				"States": {
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 2,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"stun_duration": 1,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": 100,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"attackspeed_duration": 2,
			},
		},
	},
	"wisp_0": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "wisp_tether",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 1,
		"precache": {
			"particle": "particles/generic_gameplay/generic_stunned.vpcf",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/spectre.lua",
				"Function": "OnSpellStart",
			},
		},
		"Modifiers": {
			"modifier_wisp_0": {
				"Passive": 0,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/wisp.lua",
						"Function": "OnSpawn",
					},
				},
				"IsHidden": 1,
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT | MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE",
			},
			"modifier_wisp_0_stun": {
				"OverrideAnimation": "ACT_DOTA_DISABLED",
				"IsDebuff": 1,
				"Duration": "%stun_duration",
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"EffectName": "particles/generic_gameplay/generic_stunned.vpcf",
				"EffectAttachType": "follow_overhead",
			},
			"modifier_wisp_0_cooldown": {
				"Duration": "%cooldown",
				"IsHidden": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 5,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"stun_duration": 1,
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"cooldown": 2.5,
			},
		},
	},
	"slience": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/slience",
		"AbilityTextureName": "death_prophet_silence",
		"MaxLevel": 5,
		"AbilityCastRange": 900,
		"AbilityCastPoint": "0.5 0.5 0.5 0.5",
		"AbilityCooldown": 12,
		"AbilityManaCost": 0,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_NO",
		"AbilityDuration": "3.0 4.0 5.0 6.0",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 425,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"duration": "2.0 2.5 3.0 3.5 4.0",
			},
		},
	},
	"death_exorcism": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "death_prophet_exorcism",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_BUILDING",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"AbilityCastPoint": "0.5 0.5 0.5",
		"AbilityCooldown": 300,
		"AbilityManaCost": 0,
		"precache": {
			"particle": "particles/units/heroes/hero_death_prophet/death_prophet_spirit_model.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_death_prophet.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_12.lua",
				"Function": "ExorcismDeath",
			},
			"RemoveModifier": {
				"ModifierName": "modifier_exorcism",
				"Target": "CASTER",
			},
			"ApplyModifier": {
				"ModifierName": "modifier_exorcism",
				"Target": "CASTER",
				"Duration": "%AbilityDuration",
			},
			"FireSound": {
				"EffectName": "Hero_DeathProphet.Exorcism.Cast",
				"Target": "CASTER",
			},
		},
		"Modifiers": {
			"modifier_exorcism": {
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_12.lua",
						"Function": "ExorcismStart",
					},
					"FireSound": {
						"EffectName": "Hero_DeathProphet.Exorcism",
						"Target": "CASTER",
					},
				},
				"OnAttackStart": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_12.lua",
						"Function": "ExorcismAttack",
					},
				},
				"OnDeath": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_12.lua",
						"Function": "ExorcismDeath",
					},
					"FireSound": {
						"EffectName": "Hero_DeathProphet.Death",
						"Target": "CASTER",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_12.lua",
						"Function": "ExorcismEnd",
					},
				},
			},
			"modifier_exorcism_spirit": {
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_12.lua",
						"Function": "ExorcismPhysics",
					},
					"AttachEffect": {
						"EffectName": "particles/units/heroes/hero_death_prophet/death_prophet_spirit_model.vpcf",
						"EffectAttachType": "follow_origin",
						"Target": "TARGET",
						"ControlPointEntities": {
							"TARGET": "attach_origin",
						},
					},
				},
				"States": {
					"MODIFIER_STATE_INVULNERABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_HEALTH_BAR": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_UNIT_COLLISION": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NOT_ON_MINIMAP": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_UNSELECTABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_FLYING": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_DISARMED": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"duration": 300,
			},
			"11": {
				"var_type": "FIELD_FLOAT",
				"delay_between_spirits": 0.3,
			},
			"12": {
				"var_type": "FIELD_FLOAT",
				"min_time_between_attacks": 3.0,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 700,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"spirits": "40 16 24 32 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"spirit_speed": 500,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"max_distance": 2000,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"give_up_distance": 1200,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"min_damage": 300,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"max_damage": 300,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"heal_percent": 25,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"average_damage": "250 500 750 1000 1250",
			},
		},
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"FightRecapLevel": 2,
		"AbilityDuration": 300,
	},
	"fatal_bonds": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "warlock_fatal_bonds",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCooldown": 24,
		"precache": {
			"particle": "particles/units/heroes/hero_warlock/warlock_fatal_bonds_icon.vpcf",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_7.lua",
				"Function": "OnFatalBonds",
			},
		},
		"Modifiers": {
			"modifier_fatal_bonds_debuff": {
				"OnTakeDamage": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_7.lua",
						"Function": "OnTakeDamage",
						"damage": "%attack_damage",
					},
				},
				"Duration": "%duration",
				"IsDebuff": 1,
				"EffectName": "particles/units/heroes/hero_warlock/warlock_fatal_bonds_icon.vpcf",
				"EffectAttachType": "follow_overhead",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 900,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": 12,
			},
		},
	},
	"hunt": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/hunt",
		"AbilityTextureName": "lycan_shapeshift",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"critical": "300 350 400 450 900",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"reduce": -2250,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"interval_min": 2,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"interval_max": 6,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"evasion": 40,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"alert_range": 900,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"alert_range": 900,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"alert_range": 900,
			},
		},
	},
	"howl": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/howl",
		"AbilityTextureName": "lycan_howl",
		"MaxLevel": 5,
		"AbilityCooldown": 12,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"duration": 0.5,
			},
		},
	},
	"gods_strength": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/gods_strength",
		"AbilityTextureName": "sven_gods_strength",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCastRange": 900,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 40,
		"AbilityManaCost": 100,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": "25.0 25.0 25.0",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"gods_strength_damage": "1500 2000 2500 3000 3500",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"attack_time": -1,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 900,
			},
		},
	},
	"warcry": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/warcry",
		"AbilityTextureName": "sven_warcry",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCastRange": 900,
		"AbilityCooldown": 14,
		"AbilityManaCost": 25,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 7,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"warcry_armor": "30 60 90 120 150",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"warcry_movespeed": 50,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 900,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"warcry_attackspeed": "40 50 60 70 80",
			},
		},
	},
	"storm_bolt": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/storm_bolt",
		"AbilityTextureName": "sven_storm_bolt",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 600,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 6,
		"AbilityManaCost": 140,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_NO",
		"AbilityDamage": "6000 12000 18000 24000 48000",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"bolt_speed": 1000,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bolt_stun_duration": 2,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"bolt_aoe": 255,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"vision_radius": 225,
			},
		},
	},
	"gush": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/gush",
		"AbilityTextureName": "tidehunter_gush",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 700,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 12,
		"AbilityManaCost": 100,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_NO",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"projectile_speed": "4000 4000 4000 4000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"movement_speed": -80,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"armor_bonus": -275,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"damage": "2000 4000 6000 8000 10000",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
		},
	},
	"anchor_smash": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/anchor_smash",
		"AbilityTextureName": "tidehunter_anchor_smash",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCastRange": 400,
		"AbilityCastPoint": 0.5,
		"AbilityCooldown": 4,
		"AbilityManaCost": 30,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage_reduction": -60,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"reduction_duration": 6,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 400,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"damage": "2000 4000 6000 8000 10000",
			},
		},
	},
	"great_cleave": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/great_cleave",
		"AbilityTextureName": "sven_great_cleave",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"great_cleave_radius": 300,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"great_cleave_damage": "20 35 50 65 80",
			},
		},
	},
	"shock_wave": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/shock_wave",
		"AbilityTextureName": "earthshaker_echo_slam",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastPoint": 2,
		"AbilityCooldown": 8,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "10000 20000 30000 40000 60000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"speed": 600,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"distance": 1200,
			},
		},
	},
	"earthshake": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/earthshake",
		"AbilityTextureName": "earthshaker_aftershock_egset",
		"MaxLevel": 5,
		"AbilityCooldown": 8,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 80,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"delay": 4,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 1200,
			},
		},
	},
	"enchant_totem": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/enchant_totem",
		"AbilityTextureName": "earthshaker_enchant_totem",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastRange": 0,
		"AbilityCastPoint": "0.69 0.69 0.69 0.69",
		"AbilityCooldown": 5,
		"AbilityManaCost": 50,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": "14.0 14.0 14.0 14.0",
		"AbilityDamage": "0 0 0 0",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"totem_damage_percentage": "3000 4000 5000 6000 7000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": 6,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 500,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"stun_duration": 2,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"shock_wave_damage": "10000 20000 30000 40000 50000",
			},
		},
	},
	"mana_purge": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/mana_purge",
		"AbilityTextureName": "nyx_assassin_mana_burn",
		"MaxLevel": 5,
		"AbilityCastRange": 900,
		"AbilityCooldown": 16,
		"AbilityManaCost": 100,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
	},
	"death_arrow": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "necronomicon_archer_mana_burn",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"Modifiers": {
			"modifier_death_arrow": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_30.lua",
						"Function": "OnDeathArrow",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 10,
			},
		},
	},
	"scream_of_pain": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "queenofpain_scream_of_pain",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCooldown": 7.0,
		"AbilityManaCost": 110,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_queenofpain.vsndevts",
			"particle": "particles/units/heroes/hero_bane/bane_nightmare.vpcf",
		},
		"OnSpellStart": {
			"FireSound": {
				"EffectName": "Hero_QueenOfPain.ScreamOfPain",
				"Target": "CASTER",
			},
			"AttachEffect": {
				"EffectName": "particles/units/heroes/hero_queenofpain/queen_scream_of_pain_owner.vpcf",
				"EffectAttachType": "attach_origin",
				"Target": "CASTER",
			},
			"ActOnTargets": {
				"Target": {
					"Center": "CASTER",
					"Radius": "%radius",
					"Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
					"Types": "DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_HERO",
				},
				"Action": {
					"TrackingProjectile": {
						"Target": "TARGET",
						"EffectName": "particles/units/heroes/hero_queenofpain/queen_scream_of_pain.vpcf",
						"Dodgeable": 0,
						"ProvidesVision": 0,
						"MoveSpeed": "%projectile_speed",
						"SourceAttachment": "DOTA_PROJECTILE_ATTACHMENT_HITLOCATION",
					},
				},
			},
		},
		"OnProjectileHitUnit": {
			"RunScript": {
				"Target": "TARGET",
				"ScriptFile": "scripts/vscripts/ability_unit.lua",
				"Function": "KvDamage",
				"damage": "%damage",
			},
			"ApplyModifier": {
				"Target": "TARGET",
				"ModifierName": "modifier_scream_of_pain_debuff",
			},
		},
		"Modifiers": {
			"modifier_scream_of_pain_debuff": {
				"Properties": {
				},
				"States": {
					"MODIFIER_STATE_NO_TEAM_SELECT": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_UNSELECTABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_COMMAND_RESTRICTED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"IsDebuff": 1,
				"Duration": "%shock_duration",
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_37.lua",
						"Function": "RoshanShock",
					},
				},
				"ThinkInterval": 0.5,
				"OnCreated": {
					"AttachEffect": {
						"Target": "TARGET",
						"EffectName": "particles/units/heroes/hero_bane/bane_nightmare.vpcf",
						"EffectAttachType": "follow_overhead",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"projectile_speed": 900,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "40000 80000 120000 160000 200000",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"shock_duration": 1.5,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
		},
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_NO",
	},
	"queen_split": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "queenofpain_sanguine_blink",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityCooldown": 40,
		"precache": {
			"particle": "particles/units/heroes/hero_queenofpain/queen_blink_end.vpcf",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_34.lua",
				"Function": "QueenSplit",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 30,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
		},
	},
	"shadow_strike": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "queenofpain_sanguine_shadow_strike",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"Modifiers": {
			"modifier_shadow_strike": {
				"IsHidden": 1,
				"Passive": 1,
				"Properties": {
				},
				"OnAttackLanded": {
					"ApplyModifier": {
						"Target": "TARGET",
						"ModifierName": "modifier_shadow_strike_stun",
					},
				},
			},
			"modifier_shadow_strike_stun": {
				"IsDebuff": 1,
				"States": {
					"MODIFIER_STATE_ROOTED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_SILENCED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Duration": "%stun_duration",
				"OnDestroy": {
					"ApplyModifier": {
						"Target": "TARGET",
						"ModifierName": "modifier_shadow_strike_debuff",
					},
				},
			},
			"modifier_shadow_strike_debuff": {
				"Duration": "%duration",
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": -10000,
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": -10000,
				},
				"IsDebuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"stun_duration": 0.2,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": 0.8,
			},
		},
	},
	"doppleganger": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "naga_siren_mirror_image",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityCooldown": 6,
		"precache": {
			"particle": "particles/econ/items/naga/naga_ti8_immortal_tail/naga_ti8_immortal_riptide.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_naga_siren.vsndevts",
		},
		"Modifiers": {
			"modifier_doppleganger": {
				"Passive": 1,
				"IsHidden": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_33.lua",
						"Function": "OnCreated",
					},
					"FireSound": {
						"EffectName": "Hero_NagaSiren.MirrorImage",
					},
				},
			},
			"modifier_doppleganger_buff": {
				"Properties": {
				},
				"States": {
					"MODIFIER_STATE_INVULNERABLE": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_SOFT_DISARMED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NOT_ON_MINIMAP": "MODIFIER_STATE_VALUE_ENABLED",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"cooldown": 8.0,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "30000 60000 90000 120000 150000",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage_radius": 400,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"illusion_radius": 900,
			},
		},
	},
	"sea_erode": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "naga_siren_rip_tide",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_naga_siren.vsndevts",
		},
		"Modifiers": {
			"modifier_sea_erode": {
				"Passive": 1,
				"OnDeath": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit/wave/wave_33.lua",
						"Function": "SeaErode",
					},
					"FireSound": {
						"Target": "CASTER",
						"EffectName": "Hero_NagaSiren.Riptide.Cast",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "30000 60000 90000 120000 150000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 450,
			},
		},
	},
	"arcane_supremacy_0": {
		"BaseClass": "ability_lua",
		"AbilityTextureName": "obsidian_destroyer_astral_imprisonment",
		"ScriptFile": "ability_hero/arcane_supremacy/arcane_supremacy_0.lua",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
	},
	"demon_sun_strike": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "invoker_sun_strike",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCastAnimation": "ACT_DOTA_ATTACK",
		"AbilityCooldown": 15,
		"AbilityManaCost": 100,
		"AbilityCastRange": 900,
		"precache": {
			"particle": "particles/units/heroes/hero_invoker/invoker_sun_strike.vpcf",
		},
		"OnSpellStart": {
			"RunScript": {
				"Function": "OnSpellStart",
				"ScriptFile": "scripts/vscripts/ability_unit/nuture/demon_sun_strike.lua",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 300000,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"distance": 900,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 175,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"delay": 1.7,
			},
		},
	},
	"boss_hell_fist": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "doom_bringer_lvl_death",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityCastAnimation": "ACT_DOTA_ATTACK",
		"AbilityCooldown": 8,
		"AbilityCastRange": 300,
		"precache": {
			"particle": "particles/units/heroes/hero_doom_bringer/doom_infernal_blade_debuff.vpcf",
		},
		"OnSpellStart": {
			"Stun": {
				"Target": "TARGET",
				"Duration": "%stun_duration",
			},
			"Damage": {
				"Target": "TARGET",
				"Type": "DAMAGE_TYPE_PURE",
				"Damage": "%damage_percent",
				"CurrentHealthPercentBasedDamage": 1,
			},
			"ApplyModifier": {
				"Target": "TARGET",
				"ModifierName": "modifier_boss_hell_fist_debuff",
				"Duration": "%duration",
			},
		},
		"Modifiers": {
			"modifier_boss_hell_fist_debuff": {
				"IsDebuff": 1,
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_unit.lua",
						"Function": "KvDamage",
						"damage": "%damage_per_second",
					},
				},
				"ThinkInterval": 1,
				"EffectName": "particles/units/heroes/hero_doom_bringer/doom_infernal_blade_debuff.vpcf",
				"EffectAttachType": "follow_origin",
				"Duration": "%duration",
				"Properties": {
					"MODIFIER_PROPERTY_DISABLE_HEALING": 1,
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage_per_second": 20000,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage_percent": 25,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"stun_duration": 0.1,
			},
		},
	},
	"demon_chains_1": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "warlock_golem_flaming_fists",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"Modifiers": {
			"modifier_demon_chains_1": {
				"OnAttackLanded": {
					"RunScript": {
						"Function": "OnAttackLanded",
						"ScriptFile": "scripts/vscripts/ability_item/demon_chains.lua",
					},
					"Random": {
						"OnSuccess": {
							"ApplyModifier": {
								"Target": "CASTER",
								"ModifierName": "modifier_demon_chains_1_buff",
							},
						},
						"Chance": "%chance",
					},
				},
				"Passive": 1,
				"IsHidden": 1,
				"Properties": {
				},
			},
			"modifier_demon_chains_1_buff": {
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%attackspeed",
					"MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT": 0.1,
				},
				"Duration": "%duration",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"bonus_damage": 18,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"cleave_radius": 350,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"chance": 15,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": 500,
			},
			"05": {
				"var_type": "FIELD_FLOAT",
				"duration": 0.5,
			},
		},
	},
	"demon_chains_2": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "warlock_golem_permanent_immolation",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"precache": {
			"particle": "particles/econ/items/warlock/warlock_hellsworn_construct/golem_hellsworn_ambient.vpcf",
		},
		"Modifiers": {
			"modifier_demon_chains_2": {
				"Passive": 1,
				"IsHidden": 1,
				"Aura": "modifier_demon_chains_2_debuff",
				"Aura_Radius": "%radius",
				"Aura_Teams": "DOTA_UNIT_TARGET_TEAM_ENEMY",
				"Aura_Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
				"EffectName": "particles/econ/items/warlock/warlock_hellsworn_construct/golem_hellsworn_ambient.vpcf",
				"EffectAttachType": "follow_origin",
			},
			"modifier_demon_chains_2_debuff": {
				"IsDebuff": 1,
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_item/demon_chains.lua",
						"Function": "OnIntervalThink",
					},
				},
				"ThinkInterval": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 12,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
		},
	},
	"demon_chains_3": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "warlock_rain_of_chaos",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"precache": {
			"particle": "particles/items/demon_chains/demon_chains_3_ring.vpcf",
		},
		"Modifiers": {
			"modifier_demon_chains_3": {
				"Passive": 1,
				"IsHidden": 1,
				"Aura": "modifier_demon_chains_3_buff",
				"Aura_Radius": "%aura_radius",
				"Aura_Teams": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
				"Aura_Types": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
				"EffectName": "particles/items/demon_chains/demon_chains_3_ring.vpcf",
				"EffectAttachType": "follow_origin",
			},
			"modifier_demon_chains_3_buff": {
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%aura_attackspeed",
					"MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE": "%aura_hp_regen_percent",
					"MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE": "%aura_attack_percent",
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"aura_hp_regen_percent": 4,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"aura_attack_percent": 30,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"aura_attackspeed": 80,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"aura_radius": 900,
			},
		},
	},
	"wisp_1": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "wisp_overcharge",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"OnSpellStart": {
			"RunScript": {
				"Target": "POINT",
				"ScriptFile": "scripts/vscripts/ability_hero/wisp.lua",
				"Function": "OnSpellStart",
			},
		},
	},
	"drow_ranger_0_11": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "drow_ranger_frost_arrows",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "D",
		"MaxLevel": 1,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCooldown": 0,
		"AbilityManaCost": 0,
		"AbilityCastRange": 0,
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/drow_ranger.lua",
				"Function": "OnToggle",
			},
		},
		"OnUpgrade": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/drow_ranger.lua",
				"Function": "Init",
			},
		},
		"Modifiers": {
			"modifier_drow_ranger_0_1": {
				"Passive": 1,
				"IsHidden": 1,
				"OnAttackLanded": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/drow_ranger.lua",
						"Function": "OnAttackLanded",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"chance": 15,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": 5,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 300,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"delay": 0.5,
			},
		},
	},
	"drow_ranger_0_21": {
		"BaseClass": "ability_lua",
		"AbilityTextureName": "drow_ranger_0_2",
		"ScriptFile": "ability_hero/drow_ranger/drow_ranger_0_2",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
		"HotKeyOverride": "D",
		"MaxLevel": 1,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCooldown": 0,
		"AbilityManaCost": 0,
		"AbilityCastRange": 0,
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/drow_ranger.lua",
				"Function": "OnToggle",
			},
		},
		"Modifiers": {
			"modifier_draw_ranger_0_2": {
				"Passive": 1,
				"IsHidden": 1,
				"Properties": {
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 5,
			},
		},
	},
	"oracle_0_old": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "oracle_false_promise",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
		"HotKeyOverride": "D",
		"MaxLevel": 1,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCooldown": 30,
		"AbilityManaCost": 50,
		"AbilityCastRange": 1200,
		"precache": {
			"particle": "particles/heroes/oracle/oracle_0.vpcf",
		},
		"OnSpellStart": {
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
				"Function": "OnSpellStart",
			},
		},
		"Modifiers": {
			"modifier_oracle_0_stack": {
				"IsBuff": 1,
				"Properties": {
					"MODIFIER_PROPERTY_STATS_INTELLECT_BONUS": "%intellect_add",
				},
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT | MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE",
			},
			"modifier_oracle_0_debuff": {
				"IsDebuff": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnCreated",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnDestroy",
					},
				},
				"OnDeath": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnDeath",
					},
				},
				"EffectName": "particles/heroes/oracle/oracle_0.vpcf",
				"EffectAttachType": "follow_origin",
				"Duration": "%duration",
			},
			"modifier_oracle_0_buff": {
				"IsDebuff": 0,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnCreated",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnDestroy",
					},
				},
				"EffectName": "particles/heroes/oracle/oracle_0.vpcf",
				"EffectAttachType": "follow_origin",
				"Duration": "%duration",
				"IsBuff": 1,
			},
			"modifier_oracle_0": {
				"Passive": 1,
				"IsHidden": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "AutoCast",
					},
				},
				"Attributes": "MODIFIER_ATTRIBUTE_PERMANENT | MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE",
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 15,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"intellect_add": 5,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"exp_add": 30,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"bonus_damage": 50,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"bonus_damage_add": 1,
			},
		},
	},
	"oracle_1_old": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "oracle_purifying_flames",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "Q",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCooldown": 2.25,
		"AbilityManaCost": "60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250",
		"AbilityCastRange": 1200,
		"AOERadius": 300,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_oracle.vsndevts",
			"particle": "particles/units/heroes/hero_oracle/oracle_purifyingflames.vpcf",
		},
		"OnSpellStart": {
			"RunScript": {
				"Target": "POINT",
				"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
				"Function": "OnSpellStart",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Oracle.PurifyingFlames.Damage",
			},
			"ApplyModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_oracle_1_buff",
			},
		},
		"Modifiers": {
			"modifier_oracle_1_debuff": {
				"Properties": {
				},
				"IsDebuff": 1,
				"EffectName": "particles/heroes/oracle/oracle_1_buff.vpcf",
				"EffectAttachType": "follow_origin",
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnIntervalThink",
					},
				},
				"ThinkInterval": "%interval",
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnCreated",
					},
				},
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnDestroy",
					},
				},
			},
			"modifier_oracle_1_buff": {
				"Properties": {
				},
				"IsDebuff": 0,
				"Duration": "%duration",
				"EffectName": "particles/units/heroes/hero_oracle/oracle_purifyingflames.vpcf",
				"EffectAttachType": "follow_origin",
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnIntervalThink",
					},
				},
				"ThinkInterval": "%interval",
				"IsBuff": 1,
			},
			"modifier_oracle_1": {
				"Passive": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnInit",
					},
				},
				"IsDebuff": 0,
				"IsHidden": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"duration": 9,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"intellect_damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "80 160 240 320 400 480 560 640 720 800 880 960 1040 1120 1200 1280 1360 1440 1520 1600",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 300,
			},
			"05": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.25,
			},
			"06": {
				"var_type": "FIELD_FLOAT",
				"damage_per_second": "0.5 1 1.5 2 2.5 3 3.5 4 4.5 5 5.5 6 6.5 7 7.5 8 8.5 9 9.5 10",
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"damage_reduce": 30,
			},
		},
	},
	"oracle_4_old": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "abyssal_underlord_dark_rift",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "R",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCooldown": 60,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"AbilityCastRange": 800,
		"AOERadius": 600,
		"precache": {
			"particle": "particles/generic_gameplay/generic_stunned.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_oracle.vsndevts",
		},
		"OnSpellStart": {
			"RunScript": {
				"Target": "POINT",
				"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
				"Function": "OnSpellStart",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Oracle.FalsePromise.Cast",
			},
		},
		"Modifiers": {
			"modifier_oracle_4_debuff": {
				"Properties": {
				},
				"IsDebuff": 1,
				"EffectName": "particles/generic_gameplay/generic_stunned.vpcf",
				"EffectAttachType": "follow_overhead",
				"ThinkInterval": "%interval",
				"IsHidden": 1,
				"States": {
					"MODIFIER_STATE_STUNNED": "MODIFIER_STATE_VALUE_ENABLED",
					"MODIFIER_STATE_NO_UNIT_COLLISION": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"OverrideAnimation": "ACT_DOTA_DISABLED",
			},
			"modifier_oracle_4_debuff_show": {
				"IsDebuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"intellect_damage": "80 160 240 320 400 480 560 640",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"pull_duration": 0.5,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"stun_duration": 2,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"imprison_duration": 6,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"bonus_damage": 200,
			},
		},
	},
	"oracle_3_old": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "oracle_fates_edict",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "E",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCooldown": 28,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityCastRange": 1200,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_oracle.vsndevts",
			"particle": "particles/units/heroes/hero_oracle/oracle_fortune_purge.vpcf",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"Target": "TARGET",
				"ModifierName": "modifier_oracle_3",
			},
			"FireSound": {
				"Target": "TARGET",
				"EffectName": "Hero_Oracle.FatesEdict.Cast",
			},
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
				"Function": "OnSpellStart",
			},
		},
		"OnProjectileHitUnit": {
			"DeleteOnHit": 1,
			"RunScript": {
				"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
				"Function": "OnProjectileHitUnit",
			},
		},
		"Modifiers": {
			"modifier_oracle_3": {
				"Passive": 0,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnCreated",
					},
				},
				"EffectName": "particles/units/heroes/hero_oracle/oracle_fatesedict_arc_pnt.vpcf",
				"EffectAttachType": "follow_origin",
				"IsBuff": 1,
				"Duration": "%duration",
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnDestroy",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": "%movespeed",
				},
			},
			"modifier_oracle_3_block": {
			},
			"modifier_oracle_3_root": {
				"Properties": {
				},
				"States": {
					"MODIFIER_STATE_ROOTED": "MODIFIER_STATE_VALUE_ENABLED",
				},
				"Duration": 1,
				"EffectName": "particles/units/heroes/hero_oracle/oracle_fortune_purge.vpcf",
				"EffectAttachType": "attach_origin",
				"IsDebuff": 1,
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 14,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"block_duration": 1,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"block_count": "6 6 6 6 7 7 7 7 8 8 8 8 9 9 9 9 10 10 10 10",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"damage": "3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800 850 900 950 1000",
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"movespeed": 200,
			},
		},
	},
	"oracle_2_old": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "oracle_fortunes_end",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"HotKeyOverride": "W",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCooldown": 16,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityCastRange": 1200,
		"precache": {
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_oracle.vsndevts",
			"particle": "particles/heroes/oracle/oracle_2.vpcf",
		},
		"OnSpellStart": {
			"ApplyModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_oracle_2",
			},
			"FireSound": {
				"Target": "CASTER",
				"EffectName": "Hero_Oracle.FortunesEnd.Target",
			},
		},
		"Modifiers": {
			"modifier_oracle_2": {
				"Passive": 0,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnCreated",
					},
				},
				"EffectName": "particles/heroes/oracle/oracle_2.vpcf",
				"EffectAttachType": "follow_origin",
				"IsBuff": 1,
				"Duration": "%duration",
				"OnDestroy": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnDestroy",
					},
				},
				"Properties": {
					"MODIFIER_PROPERTY_STATS_INTELLECT_BONUS": "%bonus_intellect",
				},
			},
			"modifier_oracle_2_init": {
				"Passive": 1,
				"IsHidden": 1,
				"IsBuff": 1,
				"OnCreated": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/oracle.lua",
						"Function": "OnInit",
					},
				},
			},
		},
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 9,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"base_level": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"util_level": "1 1 1 1 2 2 2 2 3 3 3 3 4 4 4 4 5 5 5 5",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"cooldown": "21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"bonus_intellect": "5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100",
			},
		},
	},
	"thunder_barrier": {
		"BaseClass": "ability_datadriven",
		"AbilityTextureName": "arc_warden_flux",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_TOGGLE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"HotKeyOverride": "R",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastPoint": 0,
		"AbilityManaCost": "60 120 180 240 300 360 420 480",
		"precache": {
			"particle": "particles/units/heroes/hero_leshrac/leshrac_lightning_slow.vpcf",
			"soundfile": "soundevents/game_sounds_heroes/game_sounds_terrorblade.vsndevts",
		},
		"OnToggleOn": {
			"ApplyModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_thunder_barrier",
			},
		},
		"OnToggleOff": {
			"RemoveModifier": {
				"Target": "CASTER",
				"ModifierName": "modifier_thunder_barrier",
			},
		},
		"Modifiers": {
			"modifier_thunder_barrier": {
				"IsBuff": 1,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%bonus_attackspeed",
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": "%bonus_movespeed",
					"MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS": "%bonus_resistance",
					"MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE": "%bonus_amp_percent",
				},
				"OnIntervalThink": {
					"RunScript": {
						"ScriptFile": "scripts/vscripts/ability_hero/mechanic.lua",
						"Function": "OnIntervalThink",
					},
					"SpendMana": {
						"Mana": "%mana_cost",
					},
				},
				"ThinkInterval": "%palsy_interval",
				"EffectName": "particles/heroes/omni_knight/thunder_barrier.vpcf",
				"EffectAttachType": "follow_chest",
				"OnCreated": {
					"FireSound": {
						"Target": "CASTER",
						"EffectName": "Hero_Terrorblade.Reflection",
					},
				},
			},
			"modifier_thunder_barrier_debuff": {
				"IsDebuff": 1,
				"Properties": {
					"MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT": "%palsy_attackspeed",
					"MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT": "%palsy_movespeed",
				},
				"Duration": "%palsy_duration",
				"EffectName": "particles/units/heroes/hero_leshrac/leshrac_lightning_slow.vpcf",
				"EffectAttachType": "follow_origin",
			},
		},
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"palsy_radius": 600,
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"storm_damage": "5 10 15 20 25 30 35 40",
			},
			"12": {
				"var_type": "FIELD_INTEGER",
				"storm_jump_count": 4,
			},
			"13": {
				"var_type": "FIELD_INTEGER",
				"storm_chance": 17,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"bonus_attackspeed": "60 70 80 90 100 110 120 130",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_movespeed": "45 60 75 90 105 120 135 150",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"bonus_resistance": "10 12 14 16 18 20 22 24",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"bonus_amp_percent": "100 125 150 175 200 225 250 275",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"mana_cost": "10 20 30 40 50 60 70 80",
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"palsy_attackspeed": "-80 -100 -120 -140 -160 -180 -200 -220",
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"palsy_movespeed": "-120 -135 -150 -165 -180 -195 -210 -225",
			},
			"08": {
				"var_type": "FIELD_FLOAT",
				"palsy_duration": 0.5,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"palsy_interval": 1,
			},
		},
	},
	"omniknight_0": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/omniknight/omniknight_0",
		"AbilityTextureName": "omniknight_0",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES_STRONG",
		"MaxLevel": 1,
		"AbilityCooldown": 2,
		"IgnoreCooldownReduction": 1,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 2,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE| DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"stun_duration": 4,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"chance": 10,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"str_factor": 10,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"scepter_radius": 300,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"active_cooldown": 6,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"cooldown": 2,
			},
		},
	},
	"omniknight_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/omniknight/omniknight_1",
		"AbilityTextureName": "omniknight_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES_STRONG",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_ATTACK",
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 0,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 1,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800 850 900 950 1000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"str_factor": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 400,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"stun_duration": 2,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"max_charges": 3,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"charge_restore_time": 8,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"scepter_charges": 4,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"damage_increase_pct": 25,
			},
		},
	},
	"omniknight_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/omniknight/omniknight_2",
		"AbilityTextureName": "omniknight_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastRange": 600,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 60,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 3,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"duration": 40,
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"attackspeed_reduce": 50,
			},
			"12": {
				"var_type": "FIELD_INTEGER",
				"movespeed_reduce": 15,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"scepter_interval": 1,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"scepter_count": 3,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"scepter_damage": 10,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"scepter_jump": 3,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"health_regen": "10 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200",
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"mana_regen": "4 8 12 16 20 24 28 32 36 40 44 48 52 56 60 64 68 72 76 80",
			},
			"08": {
				"var_type": "FIELD_FLOAT",
				"health_regen_pct": "0.5 1 1.5 2 2.5 3 3.5 4 4.5 5 5.5 6 6.5 7 7.5 8 8.5 9 9.5 10",
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"chance": "61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80",
			},
		},
	},
	"omniknight_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/omniknight/omniknight_3",
		"AbilityTextureName": "omniknight_3",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES_STRONG",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"bonus_attackspeed": "80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250 260 270",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_str": "40 80 120 160 200 240 280 320 360 400 440 480 520 560 600 640 680 720 760 800",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"bonus_str_pct": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"bonus_chance": 1,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"bonus_str_factor": 1,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"attack_count": 8,
			},
		},
	},
	"omniknight_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/omniknight/omniknight_4",
		"AbilityTextureName": "omniknight_4",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastPoint": 0,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 4,
		"AbilityManaCost": "60 120 180 240 300 360 420 480",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_TOGGLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"palsy_radius": 600,
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"storm_str_damage": "10 20 30 40 50 60 70 80",
			},
			"12": {
				"var_type": "FIELD_INTEGER",
				"storm_jump_count": 4,
			},
			"13": {
				"var_type": "FIELD_INTEGER",
				"storm_chance": 30,
			},
			"14": {
				"var_type": "FIELD_FLOAT",
				"storm_interval": 0.3,
			},
			"15": {
				"var_type": "FIELD_INTEGER",
				"bonus_attackspeed": "60 70 80 90 100 110 120 130",
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"bonus_movespeed": "45 60 75 90 105 120 135 150",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_resistance": "10 12 14 16 18 20 22 24",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"bonus_amp_percent": "100 125 150 175 200 225 250 275",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"mana_cost": "10 20 30 40 50 60 70 80",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"palsy_attackspeed": "80 100 120 140 160 180 200 220",
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"palsy_movespeed": "120 135 150 165 180 195 210 225",
			},
			"07": {
				"var_type": "FIELD_FLOAT",
				"palsy_duration": 0.5,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"palsy_interval": 1,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"scepter_damage": 10,
			},
		},
	},
	"templar_assassin_0": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/templar_assassin/templar_assassin_0",
		"AbilityTextureName": "templar_assassin_0",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_NO",
		"PurgeType": "PurgeTypeStrong",
		"MaxLevel": 1,
		"AbilityCharges": 3,
		"AbilityChargeRestoreTime": 6,
		"AbilityCooldown": 0,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 2,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"charge_restore_time": 6,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"max_charges": 3,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"cost_pct_per_stack": 3,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"scepter_damage": 10,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"scepter_radius": 300,
			},
		},
	},
	"templar_assassin_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/templar_assassin/templar_assassin_1",
		"AbilityTextureName": "templar_assassin_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_ATTACK",
		"AbilityCastRange": 800,
		"AbilityCastPoint": 0.1,
		"AbilityCooldown": 8,
		"AbilityManaCost": "40 80 120 160 200 240 280 320 360 400 440 480 520 560 600 640 680 720 760 800",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "250 500 750 1000 1250 1500 1750 2000 2250 2500 2750 3000 3250 3500 3750 4000 4250 4500 4750 5000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"health_pct": 30,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"angle": 90,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"distance": 600,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"duration": 5,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"speed": 2000,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"bonus_pct": 50,
			},
		},
	},
	"templar_assassin_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/templar_assassin/templar_assassin_2",
		"AbilityTextureName": "templar_assassin_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastRange": 1600,
		"AbilityCastPoint": 0.1,
		"AbilityCharges": 3,
		"AbilityChargeRestoreTime": 6,
		"AbilityCooldown": 0,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 3,
		"AbilityManaCost": "20 40 60 80 100 120 140 160 180 200 220 240 260 280 300 320 340 360 380 400",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"speed": 1600,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"distance": 800,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"movespeed": 50,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"radius": 200,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"scepter_refresh_chance": 30,
			},
		},
	},
	"templar_assassin_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/templar_assassin/templar_assassin_3",
		"AbilityTextureName": "templar_assassin_3",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_ATTACK",
		"AbilityCooldown": 8,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 1,
		"AbilityManaCost": "60 120 180 240 300 360 420 480 540 600 660 720 780 840 900 960 1020 1080 1140 1200",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"scepter_stun_duration": 2,
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800 850 900 950 1000",
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"resistance": "5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 6,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 150,
			},
			"05": {
				"var_type": "FIELD_FLOAT",
				"damage_tick": 0.25,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"active_radius": 300,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"active_duration": 1,
			},
			"08": {
				"var_type": "FIELD_FLOAT",
				"delay": 0.5,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"bonus_attack_range": "20 40 60 80 100 120 140 160 180 200 220 240 260 280 300 320 340 360 380 400",
			},
		},
	},
	"templar_assassin_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/templar_assassin/templar_assassin_4",
		"AbilityTextureName": "templar_assassin_4",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCooldown": 30,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 4,
		"AbilityManaCost": "200 400 600 800 1000 1200 1400 1600",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_TOGGLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "400 800 1200 1600 2000 2400 2800 3200",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"damage_tick": 0.2,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"mana_cost_pct": 2,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"turn_rate": 80,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"movespeed": 100,
			},
			"08": {
				"var_type": "FIELD_FLOAT",
				"duration": 0.1,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"scepter_chance": 15,
			},
		},
	},
	"drow_ranger_0_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/drow_ranger/drow_ranger_0_1",
		"AbilityTextureName": "drow_ranger_frost_arrows",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"chance": 25,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"agi_damage": 5,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 300,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"delay": 0.5,
			},
			"05": {
				"var_type": "FIELD_FLOAT",
				"agi_damage_increase": 0.01,
			},
		},
	},
	"drow_ranger_0_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/drow_ranger/drow_ranger_0_2",
		"AbilityTextureName": "drow_ranger_0_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"agi_factor": 5,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_attack_range": 550,
			},
		},
	},
	"drow_ranger_1_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/drow_ranger/drow_ranger_1_1",
		"AbilityTextureName": "drow_ranger_1_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCastRange": 1200,
		"AbilityCooldown": 8,
		"AbilityManaCost": "60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_FLOAT",
				"reduce_duration": 1.5,
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"collision_radius": 50,
			},
			"12": {
				"var_type": "FIELD_INTEGER",
				"speed": 900,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"arrows_per_sec": 16,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"distance": 1000,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"chance": 15,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"cooldown": 3,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"base_damage": 50,
			},
			"07": {
				"var_type": "FIELD_FLOAT",
				"agility_damage": 1.5,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"radius": 500,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"movespeed_reduce": 30,
			},
		},
	},
	"drow_ranger_1_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/drow_ranger/drow_ranger_1_2",
		"AbilityTextureName": "drow_ranger_1_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCooldown": 12,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_HIDDEN",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"count": 4,
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"attack_factor": 0.25,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.3,
			},
		},
	},
	"drow_ranger_2_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/drow_ranger/drow_ranger_2_1",
		"AbilityTextureName": "drow_ranger_marksmanship",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastRange": 1200,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 10,
		"AbilityManaCost": 60,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": 50,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"agi_damage": 2,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
		},
	},
	"drow_ranger_2_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/drow_ranger/drow_ranger_2_2",
		"AbilityTextureName": "drow_ranger_3_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastRange": 1200,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 10,
		"AbilityManaCost": 60,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": 50,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"agi_damage": 2,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
		},
	},
	"drow_ranger_3_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/drow_ranger/drow_ranger_3_1",
		"AbilityTextureName": "drow_ranger_marksmanship",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": 50,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"agi_damage": 1.5,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"movespeed_reduce": -10,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"reduce_duration": 3,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"require_count": 8,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"curse_duration": 2,
			},
		},
	},
	"drow_ranger_3_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/drow_ranger/drow_ranger_3_2",
		"AbilityTextureName": "drow_ranger_3_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": 50,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"agi_damage": 0.1,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"extra_agi_damage": 4,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"require_count": 30,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"agi_percent": 40,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"debuff_duration": 3,
			},
		},
	},
	"drow_ranger_0": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/drow_ranger/drow_ranger_0",
		"AbilityTextureName": "drow_ranger_frost_arrows",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"AbilityCooldown": 3,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"agi_damage": 5,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 300,
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"delay": 0.5,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"agi_damage_increase": 0.01,
			},
		},
	},
	"drow_ranger_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/drow_ranger/drow_ranger_1",
		"AbilityTextureName": "drow_ranger_1_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCastRange": 1200,
		"AbilityCooldown": 8,
		"AbilityManaCost": "60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"radius": 500,
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"movespeed_reduce": 30,
			},
			"12": {
				"var_type": "FIELD_FLOAT",
				"reduce_duration": 1.5,
			},
			"13": {
				"var_type": "FIELD_INTEGER",
				"collision_radius": 50,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"speed": 900,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"arrows_per_sec": 16,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"distance": 1000,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"chance": 15,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800 850 900 950 1000",
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"curse_duration": 2,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"require_count": 8,
			},
			"09": {
				"var_type": "FIELD_FLOAT",
				"agility_damage": "0.25 0.5 0.75 1 1.25 1.5 1.75 2 2.25 2.5 2.75 3 3.25 3.5 3.75 4 4.25 4.5 4.75 5",
			},
		},
	},
	"drow_ranger_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/drow_ranger/drow_ranger_2",
		"AbilityTextureName": "drow_ranger_1_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCooldown": 12,
		"AbilityManaCost": "20 40 60 80 100 120 140 160 180 200 220 240 260 280 300 320 340 360 380 400",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 6,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"count": 4,
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"attack_factor": "0.25 0.5 0.75 1 1.25 1.5 1.75 2 2.25 2.5 2.75 3 3.25 3.5 3.75 4 4.25 4.5 4.75 5",
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.3,
			},
		},
	},
	"drow_ranger_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/drow_ranger/drow_ranger_3",
		"AbilityTextureName": "drow_ranger_3_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "25 50 75 100 125 150 175 200 225 250 275 300 325 350 375 400 425 450 475 500",
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"attack_damage": "0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 1.1 1.2 1.3 1.4 1.5 1.6 1.7 1.8 1.9 2",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"extra_agi_damage": "4 8 12 16 20 24 28 32 36 40 44 48 52 56 60 64 68 72 76 80",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"require_count": 30,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"agi_percent": 40,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"debuff_duration": 3,
			},
		},
	},
	"drow_ranger_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/drow_ranger/drow_ranger_4",
		"AbilityTextureName": "drow_ranger_marksmanship_ti9",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastPoint": 2,
		"AbilityCooldown": 60,
		"AbilityManaCost": "200 400 600 800 1000 1200 1400 1600",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"broke_damage": 50,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"agi_damage": "120 240 360 480 600 720 840 960",
			},
		},
	},
	"spectre_0": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/spectre/spectre_0",
		"AbilityTextureName": "spectre_0",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 1,
		"AbilityCooldown": 3,
		"IgnoreCooldownReduction": 1,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 1,
		"AbilityManaCost": 100,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 5,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"unit_limit": 6,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"attack_count": 3,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"damage": 60,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"health": 30,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"scepter_illusion_damage": 100,
			},
		},
	},
	"spectre_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/spectre/spectre_1",
		"AbilityTextureName": "spectre_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCooldown": 3,
		"AbilityManaCost": 100,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "200 400 600 800 1000 1200 1400 1600 1800 2000 2200 2400 2600 2800 3000 3200 3400 3600 3800 4000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"distance": 3000,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"speed": 2000,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"radius": 200,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"per_damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"movespeed": 60,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"duration": 10,
			},
			"09": {
				"var_type": "FIELD_FLOAT",
				"root_duration": "1.5 1.7 1.9 2.1 2.3 2.5 2.7 2.9 3.1 3.3 3.5 3.7 3.9 4.1 4.3 4.5 4.7 4.9 5.1 5.3",
			},
		},
	},
	"spectre_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/spectre/spectre_2",
		"AbilityTextureName": "spectre_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCooldown": 10,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 2,
		"AbilityManaCost": 60,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"scepter_min_damage_pct": 50,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage_limit": "8 16 24 32 40 48 56 64 72 80 88 96 104 112 120 128 136 144 152 160",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"health_cost": 1,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"damage_active": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"05": {
				"var_type": "FIELD_FLOAT",
				"heal": "0.3 0.6 0.9 1.2 1.5 1.8 2.1 2.4 2.7 3 3.3 3.6 3.9 4.2 4.5 4.8 5.1 5.4 5.7 6",
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"radius": 450,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"shock_duration": 3,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"damage_add": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"active_health_cost": 30,
			},
		},
	},
	"spectre_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/spectre/spectre_3",
		"AbilityTextureName": "spectre_3",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 3,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"trigge_percent": 1,
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"scepter_damage_limit": 15,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"health": 1,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"max_reduce": "42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"damage": "0.05 0.1 0.15 0.2 0.25 0.3 0.35 0.4 0.45 0.5 0.55 0.6 0.65 0.7 0.75 0.8 0.85 0.9 0.95 1",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 350,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"regen": "12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50",
			},
			"06": {
				"var_type": "FIELD_FLOAT",
				"str": "0.5 1 1.5 2 2.5 3 3.5 4 4.5 5 5.5 6 6.5 7 7.5 8 8.5 9 9.5 10",
			},
			"07": {
				"var_type": "FIELD_FLOAT",
				"damage_limit": 0.1,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"max_radius": 1200,
			},
			"09": {
				"var_type": "FIELD_FLOAT",
				"health_str": 0.3,
			},
		},
	},
	"spectre_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/spectre/spectre_4",
		"AbilityTextureName": "spectre_4",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"SpellDispellableType": "SPELL_DISPELLABLE_NO",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 1200,
		"AbilityCooldown": 60,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 4,
		"AbilityManaCost": 300,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"scepter_cooldown": 50,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "30 60 90 120 150 180 210 240",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"soul_loss": 30,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage_count": 4,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"max_bonus_damage": 30,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"duration": 30,
			},
			"06": {
				"var_type": "FIELD_FLOAT",
				"stun_duration": 2.5,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"radius": 450,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"damage_deepen": 50,
			},
			"09": {
				"var_type": "FIELD_FLOAT",
				"damage_time_point": 1.4,
			},
		},
	},
	"spectre_1_0": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/spectre/spectre_1",
		"AbilityTextureName": "spectre_1_0",
		"AbilityCastAnimation": "ACT_DOTA_CAST4_STATUE",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
	},
	"juggernaut_0": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/juggernaut/juggernaut_0",
		"AbilityTextureName": "juggernaut_0",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 1,
		"AbilityCooldown": 10,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 1,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityDuration": 6,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"critical": 400,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": 100,
			},
		},
	},
	"juggernaut_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/juggernaut/juggernaut_1",
		"AbilityTextureName": "juggernaut_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_NO",
		"PurgeType": "PurgeTypeWeak",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_OVERRIDE_ABILITY_1",
		"AbilityCooldown": 12,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 2,
		"AbilityManaCost": "80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250 260 270",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				".": "0.25 0.5 0.75 1 1.25 1.5 1.75 2 2.25 2.5 2.75 3 3.25 3.5 3.75 4 4.25 4.5 4.75 5",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"blade_fury_radius": 600,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": 100,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"movespeed": 80,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
			"07": {
				"var_type": "FIELD_FLOAT",
				"blade_fury_damage_tick": 0.2,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"illusion_damage_percent": 30,
			},
		},
	},
	"juggernaut_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/juggernaut/juggernaut_2",
		"AbilityTextureName": "juggernaut_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"PurgeType": "PurgeTypeWeak",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCooldown": 30,
		"AbilityManaCost": "80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250 260 270",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilityDuration": 10,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 30,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"output_damage": "-45 -40 -35 -30 -25 -20 -15 -10 -5 0 5 10 15 20 25 30 35 40 45 50",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"input_damage": -1025,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"images_count": "1 1 1 1 2 2 2 2 3 3 3 3 4 4 4 4 5 5 5 5",
			},
			"05": {
				"var_type": "FIELD_FLOAT",
				"invuln_duration": 0.3,
			},
		},
	},
	"juggernaut_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/juggernaut/juggernaut_3",
		"AbilityTextureName": "juggernaut_3",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_NO",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"HasScepterUpgrade": 1,
		"ScepterLevel": "3|4",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilityDuration": 6,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"damage": "0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 1.1 1.2 1.3 1.4 1.5 1.6 1.7 1.8 1.9 2",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "80 160 240 320 400 480 560 640 720 800 880 960 1040 1120 1200 1280 1360 1440 1520 1600",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"bonus_attack_speed": 15,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"duration": "4 4.4 4.8 5.2 5.6 6 6.4 6.8 7.2 7.6 8 8.4 8.8 9.2 9.6 10 10.4 10.8 11.2 11.6",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"radius": 300,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"scepter_damage_pct": 1,
			},
			"07": {
				"var_type": "FIELD_FLOAT",
				"scepter_reduce_pct": 0.5,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"scepter_ignore_armor_chance": 35,
			},
		},
	},
	"juggernaut_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/juggernaut/juggernaut_4",
		"AbilityTextureName": "juggernaut_4",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"SpellDispellableType": "SPELL_DISPELLABLE_NO",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCastRange": 600,
		"AbilityCastPoint": 0,
		"AbilityCooldown": 16,
		"AbilityManaCost": 110,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NO_INVIS",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilityDuration": 9,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"duration": "1.5 1.6 1.7 1.8 1.9 2 2.1 2.2",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.05,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"damage": "3.6 7.2 10.8 14.4 18 21.6 25.2 28.8",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"buff_duration": 4,
			},
		},
	},
	"juggernaut_2_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/juggernaut/juggernaut_2_1",
		"AbilityTextureName": "juggernaut_2_1",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES_STRONG",
		"MaxLevel": 20,
		"AbilityCastAnimation": "ACT_DOTA_ATTACK_EVENT",
		"AbilityCastRange": 1200,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 8,
		"AbilityManaCost": "80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250 260 270",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING | DOTA_ABILITY_BEHAVIOR_HIDDEN",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 1,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"width": 225,
			},
		},
	},
	"juggernaut_0_juggernaut_01": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/juggernaut/juggernaut_01/juggernaut_0_juggernaut_01",
		"AbilityTextureName": "juggernaut_0_juggernaut_01",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 1,
		"AbilityCastRange": 1200,
		"AbilityCooldown": 8,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 1,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"threshold": 8,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.1,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 10,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"scepter_mark_damage": 8,
			},
		},
	},
	"juggernaut_1_juggernaut_01": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/juggernaut/juggernaut_01/juggernaut_1_juggernaut_01",
		"AbilityTextureName": "juggernaut_1_juggernaut_01",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCastPoint": 0.15,
		"AbilityCooldown": 3,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 2,
		"AbilityManaCost": "40 45 50 55 60 65 70 75 80 85 90 95 100 105 110 115 120 125 130 135",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800 850 900 950 1000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 450,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.1,
			},
		},
	},
	"juggernaut_2_juggernaut_01": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/juggernaut/juggernaut_01/juggernaut_2_juggernaut_01",
		"AbilityTextureName": "juggernaut_2_juggernaut_01",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastRange": 3000,
		"AbilityCooldown": 16,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"property_pct": "43 46 49 52 55 58 61 64 67 70 73 76 79 82 85 88 91 94 97 100",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": 8,
			},
		},
	},
	"juggernaut_2_juggernaut_01_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/juggernaut/juggernaut_01/juggernaut_2_juggernaut_01_1",
		"AbilityTextureName": "juggernaut_2_juggernaut_01_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 1,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastRange": 6000,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"speed": 1600,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"property_pct": "43 46 49 52 55 58 61 64 67 70 73 76 79 82 85 88 91 94 97 100",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 8,
			},
		},
	},
	"juggernaut_3_juggernaut_01": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/juggernaut/juggernaut_01/juggernaut_3_juggernaut_01",
		"AbilityTextureName": "juggernaut_3_juggernaut_01",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCooldown": 20,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 3,
		"AbilityManaCost": "80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250 260 270",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 10,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800 850 900 950 1000",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"distance": 2000,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"start_radius": 175,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"end_radius": 225,
			},
		},
	},
	"juggernaut_4_juggernaut_01": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/juggernaut/juggernaut_01/juggernaut_4_juggernaut_01",
		"AbilityTextureName": "juggernaut_4_juggernaut_01",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"SpellDispellableType": "SPELL_DISPELLABLE_NO",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastAnimation": "ACT_DOTA_TAUNT",
		"AbilityCastPoint": 0.72,
		"AbilityCooldown": 60,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 4,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "400 800 1200 1600 2000 2400 2800 3200",
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"damage": "100 200 300 400 500 600 700 800",
			},
			"12": {
				"var_type": "FIELD_INTEGER",
				"damage": "",
			},
			"01": {
				"var_type": "FIELD_FLOAT",
				"delay": 0.75,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.3,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"wave_damage": "20 40 60 80 100 120 140 160",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"distance": 2000,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"start_radius": 225,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"end_radius": 300,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"count": 8,
			},
			"09": {
				"var_type": "FIELD_FLOAT",
				"duration": 3.15,
			},
		},
	},
	"nevermore_0": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/nevermore/nevermore_0",
		"AbilityTextureName": "nevermore_0",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 1,
		"AbilityCooldown": 1,
		"IgnoreCooldownReduction": 1,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 1,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 250,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": 5,
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"scepter_cooldown": 0.5,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"trigger_pct": 90,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"respawn_cooldown": 30,
			},
		},
	},
	"nevermore_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/nevermore/nevermore_1",
		"AbilityTextureName": "nevermore_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_RAZE_2",
		"AbilityCastPoint": 0.55,
		"AbilityCooldown": 8,
		"AbilityManaCost": "40 60 80 100 120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"combo_duration": 3,
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"scepter_bonus_damage": 50,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "175 350 525 700 875 1050 1225 1400 1575 1750 1925 2100 2275 2450 2625 2800 2975 3150 3325 3500",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"shadowraze_radius": 300,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"shadowraze_count": 3,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"shadowraze_range": "300 600 900",
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"reduce_damage": 30,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"stack_reduce_damage": 10,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"max_reduce_damage": 80,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"duration": 8,
			},
		},
	},
	"nevermore_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/nevermore/nevermore_2",
		"AbilityTextureName": "nevermore_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_RAZE_3",
		"AbilityCastPoint": 0.55,
		"AbilityCooldown": 45,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 3,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800 850 900 950 1000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"health_regen_pct": "4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"damage_deepen": 40,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"movespeed_reduce": 20,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"duration": 16,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"radius": 900,
			},
			"08": {
				"var_type": "FIELD_FLOAT",
				"scepter_interval": 0.5,
			},
		},
	},
	"nevermore_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/nevermore/nevermore_3",
		"AbilityTextureName": "nevermore_3",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 4,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"attack_per_str": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"mana_cost": "10 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"active_factor": 2,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"bonus_attackspeed": "20 40 60 80 100 120 140 160 180 200 220 240 260 280 300 320 340 360 380 400",
			},
		},
	},
	"nevermore_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/nevermore/nevermore_4",
		"AbilityTextureName": "nevermore_4",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_6",
		"AbilityCastPoint": 1.67,
		"AbilityCooldown": 50,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 2,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_FLOAT",
				"tick_rate": 0.1,
			},
			"11": {
				"var_type": "FIELD_FLOAT",
				"pull_rotate_speed": 0.25,
			},
			"12": {
				"var_type": "FIELD_FLOAT",
				"animation_rate": 0.2,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "300 600 900 1200 1500 1800 2100 2400",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "6 12 18 24 30 36",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"soul_count": 24,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"distance": 1200,
			},
			"05": {
				"var_type": "FIELD_FLOAT",
				"fear_duration": 3.6,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"line_width_start": 125,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"line_width_end": 350,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"line_speed": 700,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"pull_speed": 30,
			},
		},
	},
	"rubick_0": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/rubick/rubick_0",
		"AbilityTextureName": "rubick_0",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 1,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 1,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 10,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"center_damage": 5,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 200,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"center_radius": 50,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"max_count": 5,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"damage_factor": 5,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"bounce_radius": 500,
			},
		},
	},
	"rubick_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/rubick/rubick_1",
		"AbilityTextureName": "rubick_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_NO",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 1400,
		"AbilityCooldown": 13,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800 850 900 950 1000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"pull_damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"pull_duration": 0.6,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"pull_bonus": 2,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"open_damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"radius": 500,
			},
			"07": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.1,
			},
			"08": {
				"var_type": "FIELD_FLOAT",
				"stun_duration": 1.5,
			},
		},
	},
	"rubick_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/rubick/rubick_2",
		"AbilityTextureName": "rubick_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_5",
		"AbilityCastRange": 3000,
		"AbilityCharges": 3,
		"AbilityChargeRestoreTime": 8,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 2,
		"AbilityManaCost": "80 95 110 125 140 155 170 185 200 215 230 245 260 275 290 305 320 335 350 365",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"stun_duration": 1,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"delay": 1,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 300,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"shield_factor": 50,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"shield_duration": 6,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"scepter_delay": 0,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"scepter_factor": 2,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"cooldown_reduction": 15,
			},
		},
	},
	"rubick_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/rubick/rubick_3",
		"AbilityTextureName": "rubick_3",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_NO",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastRange": 1400,
		"AbilityCooldown": 18,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 3,
		"AbilityManaCost": "160 190 220 250 280 310 340 370 400 430 460 490 520 550 580 610 640 670 700 730",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"delay": 1,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 400,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"duration": 5,
			},
			"06": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.5,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"scepter_delay": 0,
			},
			"08": {
				"var_type": "FIELD_FLOAT",
				"scepter_interval": 0.25,
			},
		},
	},
	"rubick_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/rubick/rubick_4",
		"AbilityTextureName": "rubick_4",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"SpellDispellableType": "SPELL_DISPELLABLE_NO",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCastRange": 1000,
		"AbilityCooldown": 40,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 4,
		"AbilityManaCost": "300 450 600 750 900 1050 1200 1350",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"scepter_count": 80,
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"health_reduce_pct": 20,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "1 2 3 4 5 6 7 8",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"movespeed": 100,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": 99999,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"interval": 1,
			},
			"07": {
				"var_type": "FIELD_FLOAT",
				"interval_reduction": 0.925,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"count": 50,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"damage_deepen": 10,
			},
		},
	},
	"windrunner_0": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/windrunner/windrunner_0",
		"AbilityTextureName": "windrunner_0",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 1,
		"AbilityCastRange": 800,
		"AbilityCharges": 3,
		"AbilityChargeRestoreTime": 16,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 1,
		"AbilityManaCost": 100,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"bonus_attack_range": 250,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_attackspeed": 400,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"attacktime": 1,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"duration": 8,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"delay_pct": 20,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"scepter_damage": 10,
			},
		},
	},
	"windrunner_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/windrunner/windrunner_1",
		"AbilityTextureName": "windrunner_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastRange": 1500,
		"AbilityCooldown": 9,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 4,
		"AbilityManaCost": "80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250 260 270",
		"AbilityChannelTime": 1,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"scepter_chance": 15,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "30 60 90 120 150 180 210 240 270 300 330 360 390 420 450 480 510 540 570 600",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"range": 1200,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"speed": 3000,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"radius": 125,
			},
			"06": {
				"var_type": "FIELD_FLOAT",
				"delay": 0.4,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"cooldown_reduction": 60,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"bonus_range": 800,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"bonus_damage_pct": 60,
			},
		},
	},
	"windrunner_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/windrunner/windrunner_2",
		"AbilityTextureName": "windrunner_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCooldown": 20,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"speed": 1200,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"spirit_count": 3,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"duration": 12,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"stun_duration": 1,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"distance": 1200,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"width": 150,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"armor_reduce": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"reduce_duration": 4,
			},
		},
	},
	"windrunner_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/windrunner/windrunner_3",
		"AbilityTextureName": "windrunner_3",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"SpellDispellableType": "SPELL_DISPELLABLE_YES",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCharges": 2,
		"AbilityChargeRestoreTime": 12,
		"AbilityManaCost": "60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"bonus_movespeed": "54 58 62 66 70 74 78 82 86 90 94 98 102 106 110 114 118 122 126 130",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"movespeed_pct": "22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"movespeed_reduce_pct": "12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 325,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
		},
	},
	"windrunner_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/windrunner/windrunner_4",
		"AbilityTextureName": "windrunner_4",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 90,
		"HasScepterUpgrade": 1,
		"ScepterLevel": "2|3",
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"scepter_interval": 8,
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"scepter_duration": 1,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "5 10 15 20 25 30 35 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage_radius": 200,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 1200,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
			"06": {
				"var_type": "FIELD_FLOAT",
				"delay": 0.5,
			},
			"07": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.03,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"chance": 40,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"scepter_bonus_duration": 4,
			},
		},
	},
	"crystal_maiden_0": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/crystal_maiden/crystal_maiden_0",
		"AbilityTextureName": "crystal_maiden_0",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 1,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastRange": 1200,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 15,
		"HasScepterUpgrade": 1,
		"ScepterLevel": "1|3",
		"AbilityManaCost": 50,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 5,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 275,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"movespeed_reduce_pct": 8,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"cold_radius": 900,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"mark_duration": 10,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"max_count": 5,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"scepter_freeze_duration": 2,
			},
		},
	},
	"crystal_maiden_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/crystal_maiden/crystal_maiden_1",
		"AbilityTextureName": "crystal_maiden_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastPoint": 0.3,
		"AbilityCharges": 3,
		"AbilityChargeRestoreTime": 15,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_FLOAT",
				"frozen_per_cold": 0.3,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "200 400 600 800 1000 1200 1400 1600 1800 2000 2200 2400 2600 2800 3000 3200 3400 3600 3800 4000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"frozen_duration": 1.2,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"duration": 6,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 105 110 115 120",
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 105 110 115 120",
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"radius": 900,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"radius_per_cold": 100,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"damage_per_cold": 30,
			},
		},
	},
	"crystal_maiden_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/crystal_maiden/crystal_maiden_2",
		"AbilityTextureName": "crystal_maiden_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 800,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 10,
		"AbilityManaCost": "80 85 90 95 100 105 110 115 120 125 130 135 140 145 150 155 160 165 170 175",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"radius_per_cold": 30,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 6,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 300,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"movespeed_reduce": 50,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"slow_duration": 3,
			},
			"07": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.8,
			},
			"08": {
				"var_type": "FIELD_FLOAT",
				"delay": 0.4,
			},
			"09": {
				"var_type": "FIELD_FLOAT",
				"interval_per_cold": 0.05,
			},
		},
	},
	"crystal_maiden_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/crystal_maiden/crystal_maiden_3",
		"AbilityTextureName": "crystal_maiden_3",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 4,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"cooldown_reduce": "11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"mana_regen": "8 16 24 32 40 48 56 64 72 80 88 96 104 112 120 128 136 144 152 160",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"refresh_chance": 15,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"scepter_max_count": 3,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"chance_per_cold": 1,
			},
		},
	},
	"crystal_maiden_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/crystal_maiden/crystal_maiden_4",
		"AbilityTextureName": "crystal_maiden_4",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 30,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 2,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "200 400 600 800 1000 1200 1400 1600",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 900,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"duration": 8,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"curse_duration": 4,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"damage_deepen": "40 60 80 100 120 140 160 180",
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"frozen_speed": 150,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"duration_per_cold": 1,
			},
		},
	},
	"oracle_0": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/oracle/oracle_0",
		"AbilityTextureName": "oracle_0",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 1,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCastRange": 1200,
		"AbilityCastPoint": 0.15,
		"AbilityCooldown": 30,
		"IgnoreCooldownReduction": 1,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 1,
		"AbilityManaCost": 50,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"intellect_stack": 5,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"exp_gain_pct": 30,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"bonus_damage": 50,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"bonus_damage_stack": 1,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"duration": 15,
			},
		},
	},
	"oracle_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/oracle/oracle_1",
		"AbilityTextureName": "oracle_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCastRange": 1200,
		"AbilityCastPoint": 0.15,
		"AbilityCooldown": 2.25,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 4,
		"AbilityManaCost": "60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "80 160 240 320 400 480 560 640 720 800 880 960 1040 1120 1200 1280 1360 1440 1520 1600",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"damage_dot": "0.5 1 1.5 2 2.5 3 3.5 4 4.5 5 5.5 6 6.5 7 7.5 8 8.5 9 9.5 10",
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.25,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"radius": 300,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"duration": 9,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"damage_reduce_pct": 30,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"scepter_interval": 1,
			},
		},
	},
	"oracle_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/oracle/oracle_2",
		"AbilityTextureName": "oracle_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 16,
		"IgnoreCooldownReduction": 1,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 2,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"bonus_intellect": "10 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"base_level": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"util_level": "1 1 1 1 2 2 2 2 3 3 3 3 4 4 4 4 5 5 5 5",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"cooldown_reduction": "21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"duration": 9,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"scepter_bonus_int_pct": 15,
			},
		},
	},
	"oracle_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/oracle/oracle_3",
		"AbilityTextureName": "oracle_3",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastRange": 1200,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 28,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 3,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "50 100 150 200 250 300 350 400 450 500 550 600 650 700 750 800 850 900 950 1000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"movespeed": 200,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"block_count": "6 6 6 6 7 7 7 7 8 8 8 8 9 9 9 9 10 10 10 10",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"block_duration": 1,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"duration": 14,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"scepter_root_radius": 300,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"scepter_root_duration": 1,
			},
		},
	},
	"oracle_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/oracle/oracle_4",
		"AbilityTextureName": "oracle_4",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCastRange": 800,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 60,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "200 400 600 800 1000 1200 1400 1600",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "80 160 240 320 400 480 560 640",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"pull_duration": 0.5,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"stun_duration": 2,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"imprison_duration": 6,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"bonus_damage": 200,
			},
		},
	},
	"void_spirit_0": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/void_spirit/void_spirit_0",
		"AbilityTextureName": "void_spirit_0",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 1,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 1200,
		"AbilityCooldown": 5,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 2,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 10,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"scepter_cooldown": 2,
			},
		},
	},
	"void_spirit_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/void_spirit/void_spirit_1",
		"AbilityTextureName": "void_spirit_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCastPoint": 0,
		"AbilityCooldown": 10,
		"HasScepterUpgrade": 1,
		"ScepterLevel": "1|3",
		"AbilityManaCost": "60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "200 400 600 800 1000 1200 1400 1600 1800 2000 2200 2400 2600 2800 3000 3200 3400 3600 3800 4000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"base_shield": "2000 4000 6000 8000 10000 12000 14000 16000 18000 20000 22000 24000 26000 28000 30000 32000 34000 36000 38000 40000",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"damage_reduce_pct": 20,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"shield_per_attack": 40,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"radius": 500,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"duration": 10,
			},
			"08": {
				"var_type": "FIELD_FLOAT",
				"active_duration": 0.3,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"debuff_duration": 6,
			},
		},
	},
	"void_spirit_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/void_spirit/void_spirit_2",
		"AbilityTextureName": "void_spirit_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCastRange": 1600,
		"AbilityCastPoint": 0.2,
		"AbilityCharges": 2,
		"AbilityChargeRestoreTime": 12,
		"AbilityManaCost": "60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "200 400 600 800 1000 1200 1400 1600 1800 2000 2200 2400 2600 2800 3000 3200 3400 3600 3800 4000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 275,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"disappear_time": 1.3,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"stun_duration": 2,
			},
		},
	},
	"void_spirit_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/void_spirit/void_spirit_3",
		"AbilityTextureName": "void_spirit_3",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastPoint": 0.2,
		"AbilityCharges": 2,
		"AbilityChargeRestoreTime": 8,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 4,
		"AbilityManaCost": "20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 175,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"min_travel_distance": 200,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"max_travel_distance": 1600,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"pop_damage_delay": 1.25,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"movement_slow_pct": 80,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"search_radius": 300,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"bonus_damage": "400 800 1200 1600 2000 2400 2800 3200 3600 4000 4400 4800 5200 5600 6000 6400 6800 7200 7600 8000",
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"damage_deepen": 10,
			},
		},
	},
	"void_spirit_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/void_spirit/void_spirit_4",
		"AbilityTextureName": "void_spirit_4",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCastPoint": 0.2,
		"AbilityCooldown": 40,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "400 800 1200 1600 2000 2400 2800 3200",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "100 200 300 400 500 600 700 800",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 275,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"disappear_time": 1.3,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"portals_per_ring": 6,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"destination_fx_radius": 183,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"angle_per_ring_portal": 60,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"first_ring_distance_offset": 520,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"stun_duration": 6,
			},
		},
	},
	"monkey_king_0": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/monkey_king/monkey_king_0",
		"AbilityTextureName": "monkey_king_0",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 1,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 3,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"damage_reduce": 0.5,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage_deep": 2,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"scepter_chance": 15,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"scepter_critical": 50,
			},
		},
	},
	"monkey_king_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/monkey_king/monkey_king_1",
		"AbilityTextureName": "monkey_king_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_MK_STRIKE",
		"AbilityCooldown": 10,
		"AbilityManaCost": "80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250 260 270",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"strike_damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 350,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"miss": 60,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"distance": 1200,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
		},
	},
	"monkey_king_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/monkey_king/monkey_king_2",
		"AbilityTextureName": "monkey_king_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCooldown": 16,
		"AbilityManaCost": "80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230 240 250 260 270",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"damage_reduce_percent": "2.5 5 7.5 10 12.5 15 17.5 20 22.5 25 27.5 30 32.5 35 37.5 40 42.5 45 47.5 50",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_armor": "10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 105",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 2,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"shield_duration": 10,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"cooldown_reduce": 80,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"movespeed": 120,
			},
		},
	},
	"monkey_king_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/monkey_king/monkey_king_3",
		"AbilityTextureName": "monkey_king_3",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCooldown": 20,
		"HasScepterUpgrade": 1,
		"ScepterLevel": "1|2",
		"AbilityManaCost": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"cleave_radius": 300,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"cleave_damage": "60 80 100 120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"duration": "6.5 7 7.5 8 8.5 9 9.5 10 10.5 11 11.5 12 12.5 13 13.5 14 14.5 15 15.5 16",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"summon_count": 2,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"max_count": 9,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"scepter_interval": 4,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"scepter_duration": 12,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"scepter_counter_duration": 2,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"scepter_counter_attack": 1,
			},
		},
	},
	"monkey_king_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/monkey_king/monkey_king_4",
		"AbilityTextureName": "monkey_king_4",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastAnimation": "ACT_DOTA_MK_STRIKE",
		"AbilityCastRange": 1200,
		"AbilityCooldown": 60,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 4,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"thump_damage": "40 80 120 160 200 240 280 320",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"thump_radius": 1200,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"thump_duration": 1,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"crush_damage": "80 160 240 320 400 480 560 640",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"crush_radius": 400,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"crush_duration": 4,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"pure_pct": "20 30 40 50 60 70 80 90",
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"scepter_count": 9,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"scepter_damage_pct": 20,
			},
		},
	},
	"lina_0": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/lina/lina_0",
		"AbilityTextureName": "lina_0",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 1,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 4,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": 1,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"reduce": 0.5,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 10,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 350,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"interval": 1,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"ignite_count": 1,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"scepter_damage": 192,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"scepter_chance": 30,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"scepter_ignite_count": 6,
			},
		},
	},
	"lina_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/lina/lina_1",
		"AbilityTextureName": "lina_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 2000,
		"AbilityCastPoint": 0.48,
		"AbilityCooldown": 12,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 1,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"scepter_duration": 6,
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"scepter_damage_pct": 20,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "200 400 600 800 1000 1200 1400 1600 1800 2000 2200 2400 2600 2800 3000 3200 3400 3600 3800 4000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage": "3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"distance": 2000,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"width": 200,
			},
			"06": {
				"var_type": "FIELD_FLOAT",
				"stun_duration": 1.5,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"miss": 100,
			},
			"08": {
				"var_type": "FIELD_FLOAT",
				"miss_duration": 3.5,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"ignite_count": 6,
			},
		},
	},
	"lina_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/lina/lina_2",
		"AbilityTextureName": "lina_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 1300,
		"AbilityCastPoint": 0.48,
		"AbilityCooldown": 6,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 2,
		"AbilityManaCost": "120 140 160 180 200 220 240 260 280 300 320 340 360 380 400 420 440 460 480 500",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"scepter_count": 2,
			},
			"01": {
				"var_type": "FIELD_FLOAT",
				"stun_duration": 1.5,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 350,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "80 160 240 320 400 480 560 640 720 800 880 960 1040 1120 1200 1280 1360 1440 1520 1600",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"tick_damage": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"interval": 1,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"movespeed": 80,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"ignite_count": 3,
			},
		},
	},
	"lina_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/lina/lina_3",
		"AbilityTextureName": "lina_3",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 1,
		"LevelsBetweenUpgrades": 3,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"damage": "0.25 0.5 0.75 1.0 1.25 1.5 1.75 2 2.25 2.5 2.75 3.0 3.25 3.5 3.75 4.0 4.25 4.5 4.75 5.0",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_attack_speed": 10,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"duration": 5,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"interval": 1,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"ignite_count": 1,
			},
		},
	},
	"lina_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/lina/lina_4",
		"AbilityTextureName": "lina_4",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 30,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 3,
		"AbilityManaCost": "200 300 400 500 600 700 800 900",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"10": {
				"var_type": "FIELD_INTEGER",
				"ignite_count": 2,
			},
			"11": {
				"var_type": "FIELD_INTEGER",
				"scepter_meteor_damage_pct": 60,
			},
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "12 24 36 48 60 72 84 96",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 250,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"max_radius": 800,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"stun_duration": "1.25 1.5 1.75 2 2.25 2.5 2.75 3",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"delay": 1,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"wave_count": 12,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"count_per_wave": 2,
			},
			"08": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.25,
			},
			"09": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
		},
	},
	"ember_spirit_0": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/ember_spirit/ember_spirit_0",
		"AbilityTextureName": "ember_spirit_0",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 1,
		"AbilityCooldown": 2,
		"IgnoreCooldownReduction": 1,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 3,
		"AbilityManaCost": 20,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 6,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 4,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"critical": 400,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 200,
			},
		},
	},
	"ember_spirit_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/ember_spirit/ember_spirit_1",
		"AbilityTextureName": "ember_spirit_1",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastRange": 1000,
		"AbilityCooldown": 8,
		"HasScepterUpgrade": 1,
		"ScepterLevel": 4,
		"AbilityManaCost": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "200 400 600 800 1000 1200 1400 1600 1800 2000 2200 2400 2600 2800 3000 3200 3400 3600 3800 4000",
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"damage": "1.25 1.5 1.75 2 2.25 2.5 2.75 3 3.25 3.5 3.75 4 4.25 4.5 4.75 5 5.25 5.5 5.75 6",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.1,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"count": 6,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"scepter_bonus_charges": 2,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"scepter_cooldown": 8,
			},
		},
	},
	"ember_spirit_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/ember_spirit/ember_spirit_2",
		"AbilityTextureName": "ember_spirit_2",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCastRange": 1000,
		"AbilityCooldown": 6,
		"AbilityManaCost": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
		"AbilityChannelTime": 0.5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800 900 1000 1100 1200 1300 1400 1500 1600 1700 1800 1900 2000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"distance": 1350,
			},
		},
	},
	"ember_spirit_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/ember_spirit/ember_spirit_3",
		"AbilityTextureName": "ember_spirit_3",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 20,
		"RequiredLevel": 0,
		"LevelsBetweenUpgrades": 3,
		"AbilityCooldown": 0,
		"AbilityManaCost": "40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 190 200 210 220 230",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage_reduce_pct": "22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60",
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"health_cost_pct": "0.4 1 1.4 1.8 2.2 2.6 3 3.4 3.8 4.2 4.6 5 5.4 5.8 6.2 6.6 7 7.4 7.8 8.2 8",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"attack_per_health": "2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"bonus_stack": "1 2 2 2 3 3 3 4 4 4 5 5 5 6 6 6 7 7 7 8",
			},
		},
	},
	"ember_spirit_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/ember_spirit/ember_spirit_4",
		"AbilityTextureName": "ember_spirit_4",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"MaxLevel": 8,
		"RequiredLevel": 8,
		"LevelsBetweenUpgrades": 24,
		"AbilityCastAnimation": "ACT_INVALID",
		"AbilityCastRange": 0,
		"AbilityCooldown": 16,
		"HasScepterUpgrade": 1,
		"ScepterLevel": "1|2",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"speed_multiplier": 400,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"max_charges": 3,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"charge_restore_time": 16,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "400 800 1200 1600 2000 2400 2800 3200",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"damage": "100 200 300 400 500 600 700 800",
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"radius": 450,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"duration": 45,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"scepter_max_charges": 6,
			},
		},
	},
	"ember_spirit_4_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/heroes/ember_spirit/ember_spirit_4",
		"AbilityTextureName": "ember_spirit_searing_chains",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"MaxLevel": 1,
		"AbilityCastAnimation": "ACT_INVALID",
		"AbilityCooldown": 0,
		"AbilityManaCost": "50 75 100 125 150 175 200 225",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AUTOCAST | DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES | DOTA_ABILITY_BEHAVIOR_SHOW_IN_GUIDES",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"speed_multiplier": 400,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"max_charges": 3,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"charge_restore_time": 38,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"base_damage": "100 200 300 400 500 600 700 800",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"damage": "30 60 90 120 150 180 210 240",
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"radius": 450,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"speed": 1300,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"scepter_max_charges": 6,
			},
		},
	},
	"ogre_strike": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/nature/ogre_strike",
		"AbilityTextureName": "brewmaster_thunder_clap",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 583,
		"AbilityCastPoint": 1.7,
		"AbilityCooldown": 12,
		"AbilityManaCost": 80,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"stun_duration": 2,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 400,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage": 12000,
			},
		},
	},
	"ogre_jump_strike": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/nature/ogre_jump_strike",
		"AbilityTextureName": "brewmaster_thunder_clap",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastPoint": 2.1,
		"AbilityCooldown": 8,
		"AbilityManaCost": 80,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"stun_duration": 2,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 400,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"damage": 12000,
			},
		},
	},
	"boss_beat": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/nature/boss_beat",
		"AbilityTextureName": "polar_furbolg_ursa_warrior_thunder_clap",
		"AbilityType": "DOTA_ABILITY_TYPE_BASIC",
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 250,
		"AbilityCastPoint": 0.5,
		"AbilityCooldown": 4,
		"AbilityManaCost": 60,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"stun_duration": 0.1,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": 5000,
			},
		},
	},
	"wave_9_1": {
		"Note": "强攻",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wave_9_1",
		"AbilityTextureName": "legion_commander_press_the_attack",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 12,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityDuration": 6,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"heal": "1000 1500 2000 2500 5000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "200 300 400 500 1000",
			},
		},
	},
	"wave_9_2": {
		"Note": "勇气",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wave_9_2",
		"AbilityTextureName": "legion_commander_moment_of_courage",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"heal": "1000 2000 3000 4000 8000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"chance": "15 17 19 21 23",
			},
		},
	},
	"wave_34_1": {
		"Note": "女妖突袭",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wave_34_1",
		"AbilityTextureName": "venomancer_poison_sting",
		"MaxLevel": 5,
		"AbilityCastRange": 900,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 10,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDamage": "20000 40000 60000 80000 100000",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 6,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"movespeed": -500,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"speed": 600,
			},
		},
	},
	"hades_1": {
		"Note": "死亡脉冲",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/hades_1",
		"AbilityTextureName": "necrolyte_death_pulse",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 1500,
		"AbilityCastPoint": 0.1,
		"AbilityCooldown": 3,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDamage": "20000 40000 60000 80000 100000",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 1500,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"regen": 3,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"speed": 400,
			},
		},
	},
	"hades_2": {
		"Note": "竭心光环",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/hades_2",
		"AbilityTextureName": "necrolyte_heartstopper_aura",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"percent": "1 1.5 2 2.5 3 ",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"regen_reduce": "60 70 80 90 100",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.25,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"duration": "3 4 5 6 7",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"radius": 1200,
			},
		},
	},
	"hades_3": {
		"Note": "死亡契约",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/hades_3",
		"AbilityTextureName": "necrolyte_sadist",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 1200,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": "10 9 8 7 6",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityDuration": 4,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"stun_duration": 3,
			},
		},
	},
	"hades_4": {
		"Note": "死神镰刀",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/hades_4",
		"AbilityTextureName": "necrolyte_reapers_scythe",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCastRange": 1200,
		"AbilityCastPoint": 0.55,
		"AbilityCooldown": "10 9 8 7 6",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"damage_per_health": "1 1.2 1.4 1.6 1.8",
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"stun_duration": 1.5,
			},
		},
	},
	"poseidon_1": {
		"Note": "水怒",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/poseidon_1",
		"AbilityTextureName": "kunkka_torrent",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 15,
		"AbilityManaCost": 200,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": "4 5 6 7 8",
		"AbilityDamage": "4000 8000 12000 16000 32000",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"bonus_armor": "30 60 90 120 150",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_move_speed": "50 60 70 80 90",
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"delay": 1.6,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"stun_duration": 1.6,
			},
			"05": {
				"var_type": "FIELD_FLOAT",
				"torrent_interval": 0.2,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"torrent_max_distance": 1100,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"slow_duration": 3,
			},
			"08": {
				"var_type": "FIELD_INTEGER",
				"radius": 225,
			},
		},
	},
	"poseidon_3": {
		"Note": "海怒",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/poseidon_3",
		"AbilityTextureName": "tidehunter_ravage",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 15,
		"AbilityManaCost": 200,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDamage": "6000 12000 18000 24000 48000",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"speed": 725,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"duration": "2.5 3 3.5 4 4.5",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 1250,
			},
		},
	},
	"poseidon_2": {
		"Note": "潮汐使者",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/poseidon_2",
		"AbilityTextureName": "kunkka_divine_anchor_tidebringer",
		"MaxLevel": 5,
		"AbilityCooldown": "4 3.5 3 2.5 2",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"cleave_starting_width": 150,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"cleave_ending_width": 650,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"cleave_distance": 1500,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"cleave_damage": "60 80 100 120 140",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"damage_bonus": "5000 10000 15000 20000 40000",
			},
		},
	},
	"elite_34_1": {
		"Note": "痛苦尖叫",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_34_1",
		"AbilityTextureName": "queenofpain_scream_of_pain",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCooldown": 7,
		"AbilityManaCost": 110,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_NO",
		"AbilityDamage": "40000 80000 120000 160000 200000",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"projectile_speed": 900,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"shock_duration": 1.5,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
		},
	},
	"elite_34_2": {
		"Note": "女王幻影",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_34_2",
		"AbilityTextureName": "queenofpain_sanguine_blink",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCooldown": 40,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 30,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"health_pct": 50,
			},
		},
	},
	"elite_34_3": {
		"Note": "痛苦匕首",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_34_3",
		"AbilityTextureName": "queenofpain_sanguine_shadow_strike",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"stun_duration": 0.2,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"duration": 0.8,
			},
		},
	},
	"boss": {
		"Note": "Boss",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/boss",
		"AbilityTextureName": "monkey_king_wukongs_command_ti9",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityDuration": 5,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage_limit": 30,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage_reduce": "70 75 80 85 90",
			},
		},
	},
	"captain": {
		"Note": "首领",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/captain",
		"AbilityTextureName": "blue_dragonspawn_overseer_devotion_aura",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityDuration": 5,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage_limit": 60,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage_reduce": "70 75 80 85 90",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"crit_chance": 25,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"crit_mult": "200 300 400 500 600",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"health_regen_pct": 1,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"movespeed": -50,
			},
			"07": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "20 40 60 80 100",
			},
		},
	},
	"elite": {
		"Note": "精英怪",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite",
		"AbilityTextureName": "life_stealer_rage_immortal",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"health_regen_pct": 1,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"movespeed": -50,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "20 40 60 80 100",
			},
		},
	},
	"elite_4_1": {
		"Note": "清醒拍打",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_4_1",
		"AbilityTextureName": "polar_furbolg_ursa_warrior_thunder_clap",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 300,
		"AbilityCastPoint": 0.5,
		"AbilityCooldown": 8,
		"AbilityManaCost": 60,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilityDuration": 0.5,
		"AbilityDamage": "600 1200 1800 2400 3000",
	},
	"wave_5_1": {
		"Note": "活水",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wave_5_1",
		"AbilityTextureName": "morphling_morph_replicate",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 900,
		"AbilityCastPoint": 0.2,
		"AbilityCooldown": 12,
		"AbilityManaCost": 200,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 5,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "20 30 40 50 60",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 300,
			},
		},
	},
	"wave_5_2": {
		"Note": "泼水",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wave_5_2",
		"AbilityTextureName": "water_damage",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 900,
		"AbilityCastPoint": 0.2,
		"AbilityCooldown": 12,
		"AbilityManaCost": 200,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": "2 2.5 3 3.5 4",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "20 30 40 50 60",
			},
		},
	},
	"wave_7_1": {
		"Note": "闪电",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wave_7_1",
		"AbilityTextureName": "wisp_tether",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 900,
		"AbilityCastPoint": 0.2,
		"AbilityCooldown": 12,
		"AbilityManaCost": 200,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDamage": "150 300 450 600 750",
	},
	"elite_7_1": {
		"Note": "妖术",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_7_1",
		"AbilityTextureName": "shadow_shaman_voodoo",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastRange": 900,
		"AbilityCastPoint": 0,
		"AbilityCooldown": 30,
		"AbilityManaCost": 200,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_NO",
		"AbilityDuration": "1 1.5 2 2.5 3",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"movespeed": 100,
			},
		},
	},
	"elite_7_2": {
		"Note": "暗言术",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_7_2",
		"AbilityTextureName": "warlock_shadow_word",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_2",
		"AbilityCastRange": 500,
		"AbilityCastPoint": 0.5,
		"AbilityCooldown": 16,
		"AbilityManaCost": 150,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ALLIES_NO",
		"AbilityDuration": "4 6 8 10 12",
		"AbilityDamage": "200 400 600 800 1000",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"tick_interval": 1,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"regen_reduce": "40 50 60 70 80",
			},
		},
	},
	"elite_7_3": {
		"Note": "聚变",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_7_3",
		"AbilityTextureName": "warlock_upheaval",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCastRange": 1200,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 12,
		"AbilityManaCost": 200,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_NO",
		"AbilityDuration": 6,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 900,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"max_slow": 84,
			},
		},
	},
	"elite_7_4": {
		"Note": "混乱之雨",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_7_4",
		"AbilityTextureName": "invoker_chaos_meteor",
		"AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCastRange": 1200,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 30,
		"AbilityManaCost": 300,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilityDuration": 2,
		"AbilityDamage": "800 1600 2400 3200 4000",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"delay": 1.3,
			},
		},
	},
	"elite_28_1": {
		"Note": "不如跳舞",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_28_1",
		"AbilityTextureName": "furion_wrath_of_nature",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_TAUNT",
		"AbilityCooldown": 20,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityDuration": 7.2,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"regen": "20 40 60 80 100",
			},
		},
	},
	"elite_28_2": {
		"Note": "传送",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_28_2",
		"AbilityTextureName": "furion_teleportation",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 10,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"count": 8,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"delay": 2.5,
			},
		},
	},
	"wave_30_1": {
		"Note": "生命窃取",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wave_30_1",
		"AbilityTextureName": "necronomicon_warrior_mana_burn",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"percent": "2 3 4 5 6",
			},
		},
	},
	"wave_30_2": {
		"Note": "死亡渴望",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wave_30_2",
		"AbilityTextureName": "necronomicon_warrior_sight",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "10 20 30 40 50",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "5 10 15 20 25",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"trigger_pct": 5,
			},
		},
	},
	"wave_30_3": {
		"Note": "遗愿",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wave_30_3",
		"AbilityTextureName": "necronomicon_warrior_last_will",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDamage": "15000 30000 45000 60000 75000",
	},
	"elite_30_1": {
		"Note": "法力燃烧",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_30_1",
		"AbilityTextureName": "nyx_assassin_mana_burn",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 700,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": "12 11 10 9 6",
		"AbilityManaCost": 0,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage_pct": "20 40 60 80 100",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"mana_burn": "30 40 50 60 70",
			},
		},
	},
	"elite_30_2": {
		"Note": "死亡之箭",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_30_2",
		"AbilityTextureName": "necronomicon_archer_mana_burn",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 8,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"health_reduce": "1000 2000 3000 4000 5000",
			},
		},
	},
	"elite_30_3": {
		"Note": "命令光环",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_30_3",
		"AbilityTextureName": "necronomicon_archer_aoe",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 900,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_attack": "15 20 25 30 35",
			},
		},
	},
	"wave_31_1": {
		"Note": "大恶魔",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wave_31_1",
		"AbilityTextureName": "terrorblade_metamorphosis_alt1",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"lifesteal": "200 300 400 500 1000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "100 200 300 400 800",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"crit_chance": "20 25 30 35 50",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"crit_mult": "700 800 900 1000 1200",
			},
		},
	},
	"wave_31_2": {
		"Note": "灵魂隔断",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wave_31_2",
		"AbilityTextureName": "terrorblade_sunder_alt1",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCastRange": 900,
		"AbilityCastPoint": 0.5,
		"AbilityCooldown": 40,
		"AbilityManaCost": 1000,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage": "75 80 85 90 95",
			},
		},
	},
	"wave_32_1": {
		"Note": "神圣攻击",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wave_32_1",
		"AbilityTextureName": "chen_test_of_faith",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"chance": 15,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "8000 16000 24000 32000 40000",
			},
		},
	},
	"wave_32_2": {
		"Note": "神圣护甲",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wave_32_2",
		"AbilityTextureName": "chen_penitence",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCastPoint": 0.25,
		"AbilityCooldown": "20 19 18 17 16",
		"AbilityManaCost": 200,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityDuration": "4 5 6 7 8",
	},
	"wave_33_1": {
		"Note": "魔力损毁",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wave_33_1",
		"AbilityTextureName": "antimage_mana_break",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"mana_burn": "200 400 600 800 1600",
			},
		},
	},
	"wave_33_2": {
		"Note": "海蚀",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/wave_33_2",
		"AbilityTextureName": "tidehunter_gush",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityDuration": 2,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"armor_reduce": "30 60 90 120 150",
			},
		},
	},
	"elite_33_1": {
		"Note": "海妖幻影",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_33_1",
		"AbilityTextureName": "naga_siren_mirror_image",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": "12 11 10 9 8",
		"AbilityManaCost": 200,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 2,
		"AbilityDamage": "20000 40000 60000 80000 100000",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 400,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"image_count": 5,
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"delay": 0.5,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"outgoing_damage": "30 40 50 60 70",
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"incoming_damage": 1200,
			},
		},
	},
	"elite_33_2": {
		"Note": "激流",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_33_2",
		"AbilityTextureName": "naga_siren_rip_tide",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_3",
		"AbilityCooldown": 6,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
		"AbilityDuration": 4,
		"AbilityDamage": "15000 30000 45000 60000 75000",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"armor_reduce": "15 30 45 60 75",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 450,
			},
		},
	},
	"elite_33_3": {
		"Note": "海妖之歌",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_33_3",
		"AbilityTextureName": "naga_siren_song_of_the_siren",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCooldown": 16,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityDuration": 3,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "100 200 300 400 500",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 1800,
			},
		},
	},
	"elite_34_4": {
		"Note": "SM",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_34_4",
		"AbilityTextureName": "meepo_earthbind",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_1",
		"AbilityCastRange": 900,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 20,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 1.5,
	},
	"elite_34_5": {
		"Note": "超声波",
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/enemy/elite_34_5",
		"AbilityTextureName": "queenofpain_sonic_wave",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_4",
		"AbilityCastRange": 600,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 20,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
		"SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
		"AbilityDamage": "50000 100000 150000 200000 250000",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"damage_pct": 20,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"cooldown_add": 8,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"distance": 900,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"starting_aoe": 100,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"final_aoe": 450,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"speed": 900,
			},
		},
	},
	"pet_1_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_1_1",
		"AbilityTextureName": "shadow_shaman_voodoo",
		"MaxLevel": 5,
		"AbilityCooldown": "90 85 80 75 70",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"interval": 90,
			},
		},
	},
	"pet_4_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_4_1",
		"AbilityTextureName": "keeper_of_the_light_chakra_magic",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 20,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityDuration": 6,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"cooldown_reduction": "6 7 8 9 10",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"mana_restore": "15 20 25 30 35",
			},
		},
	},
	"pet_4_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_4_2",
		"AbilityTextureName": "jakiro_ice_path",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityDuration": 2,
		"AbilityDamage": 4,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"path_radius": 125,
			},
		},
	},
	"pet_4_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_4_3",
		"AbilityTextureName": "crystal_maiden_freezing_field",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 30,
		"AbilityChannelTime": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDamage": "4 6 8 10 12",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 800,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"explosion_radius": 300,
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"explosion_interval": 0.1,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"slow_duration": 1,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"movespeed_slow": -30,
			},
			"06": {
				"var_type": "FIELD_INTEGER",
				"attack_slow": -60,
			},
		},
	},
	"pet_37_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_37_1",
		"AbilityTextureName": "faceless_void_time_dilation",
		"MaxLevel": 5,
		"AbilityCooldown": 11,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityDuration": "2 2.25 2.5 2.75 3",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
		},
	},
	"pet_37_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_37_2",
		"AbilityTextureName": "faceless_void_backtrack",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"chance": "15 17 19 21 23",
			},
		},
	},
	"pet_49_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_49_1",
		"AbilityTextureName": "dazzle_shallow_grave",
		"MaxLevel": 5,
		"AbilityCooldown": "90 85 80 75 70",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"duration": 5,
			},
		},
	},
	"pet_57_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_57_1",
		"AbilityTextureName": "lina_dragon_slave",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"interval": 15,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"damage": "10 12 14 16 18",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"speed": 900,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"distance": 1300,
			},
			"05": {
				"var_type": "FIELD_INTEGER",
				"width": 300,
			},
		},
	},
	"pet_85_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_85_1",
		"AbilityTextureName": "chen_divine_favor",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"interval": "12 11 10 9 8",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": 2,
			},
		},
	},
	"pet_86_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_86_1",
		"AbilityTextureName": "beastmaster_hawk_invisibility",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"interval": 8,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"duration": 3,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "50 60 70 80 90",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "200 220 240 260 280",
			},
		},
	},
	"pet_15_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_15_1",
		"AbilityTextureName": "ember_spirit_flame_guard",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDamage": "1 2 3 4 5",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.25,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 400,
			},
		},
	},
	"pet_15_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_15_2",
		"AbilityTextureName": "ember_spirit_searing_chains",
		"MaxLevel": 5,
		"AbilityCooldown": "90 85 80 75 70",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"interval": "90 85 80 75 70",
			},
		},
	},
	"pet_16_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_16_1",
		"AbilityTextureName": "ancient_apparition/ti8_immortal_back/ancient_apparition_ice_vortex_immortal",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "20 25 30 35 40",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "50 60 70 80 90",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
		},
	},
	"pet_16_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_16_2",
		"AbilityTextureName": "wisp_relocate",
		"MaxLevel": 5,
		"AbilityCooldown": "90 85 80 75 70",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"interval": "90 85 80 75 70",
			},
		},
	},
	"pet_22_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_22_1",
		"AbilityTextureName": "pet_22_1",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 10,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 3,
		"AbilityDamage": "6 8 10 12 14",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 200,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"delay": 2.5,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"count": 6,
			},
			"04": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.1,
			},
		},
	},
	"pet_22_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_22_2",
		"AbilityTextureName": "alchemist_goblins_greed",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": "60 58 56 54 52",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityDuration": 3,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.1,
			},
		},
	},
	"pet_22_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_22_3",
		"AbilityTextureName": "modifier_cny_beast_aegis",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 12,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 8,
		"AbilityDamage": "4 6 8 10 12",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 600,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"armor": -225,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"distance": 300,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"fear_duration": 2,
			},
		},
	},
	"pet_22_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_22_4",
		"AbilityTextureName": "invoker/esl_ablityicons_relicsoftheilluminatedseer/invoker_forge_spirit",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_DIE",
		"AbilityCastPoint": 1.3,
		"AbilityCooldown": "100 90  80 70 60",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityDuration": 45,
	},
	"pet_22_5": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_22_5",
		"AbilityTextureName": "omni_knight/adoring_wingfall/omniknight_purification",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "60 70 80 90 100",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "40 50 60 70 80",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"health_regen": "15 30 45 60 75",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"mana_regen": "6 9 12 15 18",
			},
		},
	},
	"pet_22_4_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_22_4_1",
		"AbilityTextureName": "modifier_cny2015_combat",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityDuration": 0.5,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"cleave_percent": 100,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"cleave_radius": 300,
			},
		},
	},
	"pet_22_4_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_22_4_2",
		"AbilityTextureName": "modifier_cny2015_support_aura",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_CAST_ABILITY_6",
		"AbilityCastPoint": 1.74,
		"AbilityCooldown": 12,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 2,
		"AbilityDamage": "10 15 20 25 30",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 400,
			},
		},
	},
	"pet_22_4_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_22_4_3",
		"AbilityTextureName": "modifier_cny2015_speed",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_MAGNUS_SKEWER_START",
		"AbilityCastRange": 1500,
		"AbilityCastPoint": 1.74,
		"AbilityCooldown": 15,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDamage": "15 20 25 30 35",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"distance": 1500,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"speed": 1500,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"radius": 200,
			},
		},
	},
	"pet_22_4_4": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_22_4_4",
		"AbilityTextureName": "brewmaster_thunder_clap",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_LEAP_STUN",
		"AbilityCastRange": 1000,
		"AbilityCastPoint": 0.6,
		"AbilityCooldown": 6,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 2,
		"AbilityDamage": "10 15 20 25 30",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"duration": 0.6,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 400,
			},
		},
	},
	"pet_22_4_5": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_22_4_5",
		"AbilityTextureName": "modifier_cny_beast_aegis",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_RATTLETRAP_HOOKSHOT_START",
		"AbilityCastPoint": 1.8,
		"AbilityCooldown": 20,
		"AbilityChannelTime": 7,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDamage": "20 25 30 35 40",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"width": 200,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 1000,
			},
		},
	},
	"pet_41_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_41_1",
		"AbilityTextureName": "bounty_hunter_track",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "10 12 14 16 18",
			},
		},
	},
	"pet_44_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_44_1",
		"AbilityTextureName": "slardar_slithereen_crush",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 8,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 1.5,
		"AbilityDamage": "6 8 10 12 14",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 450,
			},
		},
	},
	"pet_44_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_44_2",
		"AbilityTextureName": "slardar_sprint",
		"MaxLevel": 5,
		"AbilityCooldown": "15 14 13 12 11",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityDuration": 6,
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "50 60 70 80 90",
			},
		},
	},
	"pet_6_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_6_1",
		"AbilityTextureName": "bounty_hunter/hunters_hoard/bounty_hunter_track",
		"MaxLevel": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDamage": "1 2 3 4 5",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.35,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"radius": 500,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "15 20 25 30 35",
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"attackspeed": "30 40 50 60 70",
			},
		},
	},
	"pet_6_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_6_2",
		"AbilityTextureName": "crystal_maiden_brilliance_aura_ti9_gold",
		"MaxLevel": 5,
		"AbilityCooldown": "90 85 80 75 70",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"interval": "90 85 80 75 70",
			},
		},
	},
	"pet_9_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_9_1",
		"AbilityTextureName": "doom_bringer/ti8_immortal_arm/doom_bringer_devour_immortal",
		"MaxLevel": 5,
		"AbilityCastRange": 900,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 90,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"bonus_gold": 10,
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"bonus_exp": 10,
			},
		},
	},
	"pet_9_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_9_2",
		"AbilityTextureName": "doom_bringer_scorched_earth",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.2,
		"AbilityCooldown": 30,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 20,
		"AbilityDamage": "1 2 3 4 5",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 900,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"regen": "2 2.5 3  3.5 4",
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"movespeed": "12 15 18 21 24",
			},
		},
	},
	"pet_9_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_9_3",
		"AbilityTextureName": "doom_bringer_doom",
		"MaxLevel": 5,
		"AbilityCastRange": 900,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 30,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 15,
		"AbilityDamage": "4 8 12 16 20",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 250,
			},
		},
	},
	"pet_24_1": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_24_1",
		"AbilityTextureName": "meepo/colossal_crystal_chorus/meepo_poof",
		"MaxLevel": 5,
		"AbilityCastPoint": 0.3,
		"AbilityCooldown": 30,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 15,
		"AbilityDamage": "6 8 10 12 14",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 300,
			},
			"02": {
				"var_type": "FIELD_FLOAT",
				"slow_duration": 1.5,
			},
			"03": {
				"var_type": "FIELD_FLOAT",
				"interval": 0.75,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"movespeed_slow": 30,
			},
		},
	},
	"pet_24_2": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_24_2",
		"AbilityTextureName": "tusk/glaciomarine_ability_icons/tusk_walrus_kick",
		"MaxLevel": 5,
		"AbilityCastAnimation": "ACT_DOTA_DIE",
		"AbilityCastPoint": 0.6,
		"AbilityCooldown": 5,
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AUTOCAST",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 2,
		"AbilityDamage": "3 6 9 12 15",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"radius": 300,
			},
		},
	},
	"pet_24_3": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/pets/pet_24_3",
		"AbilityTextureName": "mirana_leap",
		"MaxLevel": 5,
		"AbilityCooldown": "3 2.75 2.5 2.25 2",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
		"AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
		"AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
		"AbilityDuration": 1,
		"AbilityDamage": "1 2 3 4 5",
		"AbilitySpecial": {
			"01": {
				"var_type": "FIELD_INTEGER",
				"distance": "600 700 800 900 1000",
			},
			"02": {
				"var_type": "FIELD_INTEGER",
				"speed": 1300,
			},
			"03": {
				"var_type": "FIELD_INTEGER",
				"acceleration": 6000,
			},
			"04": {
				"var_type": "FIELD_INTEGER",
				"radius": 300,
			},
		},
	},
	"courier_blink": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/courier/courier_blink",
		"AbilityTextureName": "antimage_blink",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityCooldown": 0,
	},
	"courier_teleport": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/courier/courier_teleport",
		"AbilityTextureName": "keeper_of_the_light_recall",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityCooldown": 60,
	},
	"courier_bag": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/courier/courier_bag",
		"AbilityTextureName": "courier_return_stash_items",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityCooldown": 0,
	},
	"courier_auto_potion": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/courier/courier_auto_potion",
		"AbilityTextureName": "alchemist_unstable_concoction",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_TOGGLE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityCooldown": 0,
	},
	"courier_swap": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/courier/courier_swap",
		"AbilityTextureName": "courier_transfer_items",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityCooldown": 0,
	},
	"courier_suicide": {
		"BaseClass": "ability_lua",
		"ScriptFile": "abilities/courier/courier_suicide",
		"AbilityTextureName": "leoric_reincarnate",
		"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
		"AbilityCooldown": 0,
	},
};