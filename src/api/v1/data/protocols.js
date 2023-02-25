// DUDE PRISMARINEJS THANK YOU SO MUCH

const protocols = [
	{
		"minecraftVersion": "23w03a",
		"version": 1073741939,
		"dataVersion": 3320,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.3",
		"version": 761,
		"dataVersion": 3218,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.3-rc3",
		"version": 1073741938,
		"dataVersion": 3217,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.3-rc2",
		"version": 1073741937,
		"dataVersion": 3216,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.3-rc1",
		"version": 1073741936,
		"dataVersion": 3215,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.3-pre3",
		"version": 1073741935,
		"dataVersion": 3213,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.3-pre2",
		"version": 1073741934,
		"dataVersion": 3212,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.3-pre1",
		"version": 1073741933,
		"dataVersion": 3211,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w46a",
		"version": 1073741932,
		"dataVersion": 3210,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w45a",
		"version": 1073741931,
		"dataVersion": 3208,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w44a",
		"version": 1073741930,
		"dataVersion": 3207,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w43a",
		"version": 1073741929,
		"dataVersion": 3206,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w42a",
		"version": 1073741928,
		"dataVersion": 3205,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.2",
		"version": 760,
		"dataVersion": 3120,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.2-rc2",
		"version": 1073741927,
		"dataVersion": 3119,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.2-rc1",
		"version": 1073741926,
		"dataVersion": 3118,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.1",
		"version": 760,
		"dataVersion": 3117,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.1-rc3",
		"version": 1073741925,
		"dataVersion": 3116,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.1-rc2",
		"version": 1073741924,
		"dataVersion": 3115,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.1-pre6",
		"version": 1073741923,
		"dataVersion": 3114,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.1-pre5",
		"version": 1073741922,
		"dataVersion": 3113,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.1-pre4",
		"version": 1073741921,
		"dataVersion": 3112,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.1-pre3",
		"version": 1073741920,
		"dataVersion": 3111,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.1-pre2",
		"version": 1073741919,
		"dataVersion": 3110,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.1-rc1",
		"version": 1073741918,
		"dataVersion": 3109,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19.1-pre1",
		"version": 1073741917,
		"dataVersion": 3107,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w24a",
		"version": 1073741916,
		"dataVersion": 3106,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19",
		"version": 759,
		"dataVersion": 3105,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19-rc2",
		"version": 1073741915,
		"dataVersion": 3104,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19-rc1",
		"version": 1073741914,
		"dataVersion": 3103,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19-pre5",
		"version": 1073741913,
		"dataVersion": 3102,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19-pre4",
		"version": 1073741912,
		"dataVersion": 3101,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19-pre3",
		"version": 1073741911,
		"dataVersion": 3100,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19-pre2",
		"version": 1073741910,
		"dataVersion": 3099,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.19-pre1",
		"version": 1073741909,
		"dataVersion": 3098,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w19a",
		"version": 1073741908,
		"dataVersion": 3096,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w18a",
		"version": 1073741907,
		"dataVersion": 3095,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w17a",
		"version": 1073741906,
		"dataVersion": 3093,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w16b",
		"version": 1073741905,
		"dataVersion": 3092,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w16a",
		"version": 1073741904,
		"dataVersion": 3091,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w15a",
		"version": 1073741903,
		"dataVersion": 3089,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w14a",
		"version": 1073741902,
		"dataVersion": 3088,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w13oneblockatatime",
		"version": 1073741901,
		"dataVersion": 3076,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w13a",
		"version": 1073741900,
		"dataVersion": 3085,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w12a",
		"version": 1073741899,
		"dataVersion": 3082,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "22w11a",
		"version": 1073741898,
		"dataVersion": 3080,
		"usesNetty": true,
		"majorVersion": "1.19"
	},
	{
		"minecraftVersion": "1.18.2",
		"version": 758,
		"dataVersion": 2975,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18.2-rc1",
		"version": 1073741897,
		"dataVersion": 2974,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18.2-pre3",
		"version": 1073741896,
		"dataVersion": 2973,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18.2-pre2",
		"version": 1073741895,
		"dataVersion": 2972,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18.2-pre1",
		"version": 1073741894,
		"dataVersion": 2971,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "22w07a",
		"version": 1073741892,
		"dataVersion": 2969,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "22w06a",
		"version": 1073741891,
		"dataVersion": 2968,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "22w05a",
		"version": 1073741890,
		"dataVersion": 2967,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "22w03a",
		"version": 1073741889,
		"dataVersion": 2966,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18.1",
		"version": 757,
		"dataVersion": 2865,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18.1-rc3",
		"version": 1073741888,
		"dataVersion": 2864,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18.1-rc2",
		"version": 1073741887,
		"dataVersion": 2863,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18.1-rc1",
		"version": 1073741886,
		"dataVersion": 2862,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18.1-pre1",
		"version": 1073741885,
		"dataVersion": 2861,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18",
		"version": 757,
		"dataVersion": 2860,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18-rc4",
		"version": 1073741884,
		"dataVersion": 2859,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18-rc3",
		"version": 1073741883,
		"dataVersion": 2858,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18-rc2",
		"version": 1073741882,
		"dataVersion": 2857,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18-rc1",
		"version": 1073741881,
		"dataVersion": 2856,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18-pre8",
		"version": 1073741880,
		"dataVersion": 2855,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18-pre7",
		"version": 1073741879,
		"dataVersion": 2854,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18-pre6",
		"version": 1073741878,
		"dataVersion": 2853,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18-pre5",
		"version": 1073741877,
		"dataVersion": 2851,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18-pre4",
		"version": 1073741876,
		"dataVersion": 2850,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18-pre3",
		"version": 1073741875,
		"dataVersion": 2849,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18-pre2",
		"version": 1073741874,
		"dataVersion": 2848,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.18-pre1",
		"version": 1073741873,
		"dataVersion": 2847,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "21w44a",
		"version": 1073741872,
		"dataVersion": 2845,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "21w43a",
		"version": 1073741871,
		"dataVersion": 2844,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "21w42a",
		"version": 1073741870,
		"dataVersion": 2840,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "21w41a",
		"version": 1073741869,
		"dataVersion": 2839,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "21w40a",
		"version": 1073741868,
		"dataVersion": 2838,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "21w39a",
		"version": 1073741867,
		"dataVersion": 2836,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "21w38a",
		"version": 1073741866,
		"dataVersion": 2835,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "21w37a",
		"version": 1073741865,
		"dataVersion": 2834,
		"usesNetty": true,
		"majorVersion": "1.18"
	},
	{
		"minecraftVersion": "1.17.1",
		"version": 756,
		"dataVersion": 2730,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "1.17.1-rc2",
		"version": 1073741864,
		"dataVersion": 2729,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "1.17.1-rc1",
		"version": 1073741863,
		"dataVersion": 2728,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "1.17.1-pre3",
		"version": 1073741862,
		"dataVersion": 2727,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "1.17.1-pre2",
		"version": 1073741861,
		"dataVersion": 2726,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "1.17.1-pre1",
		"version": 1073741860,
		"dataVersion": 2725,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "1.17",
		"version": 755,
		"dataVersion": 2724,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "1.17-rc2",
		"version": 1073741859,
		"dataVersion": 2723,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "1.17-rc1",
		"version": 1073741858,
		"dataVersion": 2722,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "1.17-pre5",
		"version": 1073741857,
		"dataVersion": 2721,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "1.17-pre4",
		"version": 1073741856,
		"dataVersion": 2720,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "1.17-pre3",
		"version": 1073741855,
		"dataVersion": 2719,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "1.17-pre2",
		"version": 1073741854,
		"dataVersion": 2718,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "1.17-pre1",
		"version": 1073741853,
		"dataVersion": 2716,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w20a",
		"version": 1073741852,
		"dataVersion": 2715,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w19a",
		"version": 1073741851,
		"dataVersion": 2714,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w18a",
		"version": 1073741850,
		"dataVersion": 2713,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w17a",
		"version": 1073741849,
		"dataVersion": 2712,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w16a",
		"version": 1073741847,
		"dataVersion": 2711,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w15a",
		"version": 1073741846,
		"dataVersion": 2709,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w14a",
		"version": 1073741845,
		"dataVersion": 2706,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w13a",
		"version": 1073741844,
		"dataVersion": 2705,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w11a",
		"version": 1073741843,
		"dataVersion": 2703,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w10a",
		"version": 1073741842,
		"dataVersion": 2699,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w08b",
		"version": 1073741841,
		"dataVersion": 2698,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w08a",
		"version": 1073741840,
		"dataVersion": 2697,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w07a",
		"version": 1073741839,
		"dataVersion": 2695,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w06a",
		"version": 1073741838,
		"dataVersion": 2694,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w05b",
		"version": 1073741837,
		"dataVersion": 2692,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w05a",
		"version": 1073741836,
		"dataVersion": 2690,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "21w03a",
		"version": 1073741835,
		"dataVersion": 2689,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "1.16.5",
		"version": 754,
		"dataVersion": 2586,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16.5-rc1",
		"version": 1073741834,
		"dataVersion": 2585,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w51a",
		"version": 1073741833,
		"dataVersion": 2687,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "20w49a",
		"version": 1073741832,
		"dataVersion": 2685,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "20w48a",
		"version": 1073741831,
		"dataVersion": 2683,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "20w46a",
		"version": 1073741830,
		"dataVersion": 2682,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "20w45a",
		"version": 1073741829,
		"dataVersion": 2681,
		"usesNetty": true,
		"majorVersion": "1.17"
	},
	{
		"minecraftVersion": "1.16.4",
		"version": 754,
		"dataVersion": 2584,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16.4-rc1",
		"version": 1073741827,
		"dataVersion": 2583,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16.4-pre2",
		"version": 1073741826,
		"dataVersion": 2582,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16.4-pre1",
		"version": 1073741825,
		"dataVersion": 2581,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16.3",
		"version": 753,
		"dataVersion": 2580,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16.3-rc1",
		"version": 752,
		"dataVersion": 2579,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16.2",
		"version": 751,
		"dataVersion": 2578,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16.2-rc2",
		"version": 750,
		"dataVersion": 2577,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16.2-rc1",
		"version": 749,
		"dataVersion": 2576,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16.2-pre3",
		"version": 748,
		"dataVersion": 2575,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16.2-pre2",
		"version": 746,
		"dataVersion": 2574,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16.2-pre1",
		"version": 744,
		"dataVersion": 2573,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w30a",
		"version": 743,
		"dataVersion": 2572,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w29a",
		"version": 741,
		"dataVersion": 2571,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w28a",
		"version": 740,
		"dataVersion": 2570,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w27a",
		"version": 738,
		"dataVersion": 2569,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16.1",
		"version": 736,
		"dataVersion": 2567,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16",
		"version": 735,
		"dataVersion": 2566,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16-rc1",
		"version": 734,
		"dataVersion": 2565,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16-pre8",
		"version": 733,
		"dataVersion": 2564,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16-pre7",
		"version": 732,
		"dataVersion": 2563,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16-pre6",
		"version": 730,
		"dataVersion": 2562,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16-pre5",
		"version": 729,
		"dataVersion": 2561,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16-pre4",
		"version": 727,
		"dataVersion": 2560,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16-pre3",
		"version": 725,
		"dataVersion": 2559,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16-pre2",
		"version": 722,
		"dataVersion": 2557,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.16-pre1",
		"version": 721,
		"dataVersion": 2556,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w22a",
		"version": 719,
		"dataVersion": 2555,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w21a",
		"version": 718,
		"dataVersion": 2554,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w20b",
		"version": 717,
		"dataVersion": 2537,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w20a",
		"version": 716,
		"dataVersion": 2536,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w19a",
		"version": 715,
		"dataVersion": 2534,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w18a",
		"version": 714,
		"dataVersion": 2532,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w17a",
		"version": 713,
		"dataVersion": 2529,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w16a",
		"version": 712,
		"dataVersion": 2526,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w15a",
		"version": 711,
		"dataVersion": 2525,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w14a",
		"version": 710,
		"dataVersion": 2524,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w14infinite",
		"version": 709,
		"dataVersion": 2522,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w13b",
		"version": 709,
		"dataVersion": 2521,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w13a",
		"version": 708,
		"dataVersion": 2520,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w12a",
		"version": 707,
		"dataVersion": 2515,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w11a",
		"version": 706,
		"dataVersion": 2513,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w10a",
		"version": 705,
		"dataVersion": 2512,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w09a",
		"version": 704,
		"dataVersion": 2510,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w08a",
		"version": 703,
		"dataVersion": 2507,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w07a",
		"version": 702,
		"dataVersion": 2506,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "20w06a",
		"version": 701,
		"dataVersion": 2504,
		"usesNetty": true,
		"majorVersion": "1.16"
	},
	{
		"minecraftVersion": "1.15.2",
		"version": 578,
		"dataVersion": 2230,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "1.15.2-pre2",
		"version": 577,
		"dataVersion": 2229,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "1.15.2-pre1",
		"version": 576,
		"dataVersion": 2228,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "1.15.1",
		"version": 575,
		"dataVersion": 2227,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "1.15.1-pre1",
		"version": 574,
		"dataVersion": 2226,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "1.15",
		"version": 573,
		"dataVersion": 2225,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "1.15-pre7",
		"version": 572,
		"dataVersion": 2224,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "1.15-pre6",
		"version": 571,
		"dataVersion": 2223,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "1.15-pre5",
		"version": 570,
		"dataVersion": 2222,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "1.15-pre4",
		"version": 569,
		"dataVersion": 2221,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "1.15-pre3",
		"version": 567,
		"dataVersion": 2220,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "1.15-pre2",
		"version": 566,
		"dataVersion": 2219,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "1.15-pre1",
		"version": 565,
		"dataVersion": 2218,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "19w46b",
		"version": 564,
		"dataVersion": 2217,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "19w46a",
		"version": 563,
		"dataVersion": 2216,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "19w45b",
		"version": 562,
		"dataVersion": 2215,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "19w45a",
		"version": 561,
		"dataVersion": 2214,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "19w44a",
		"version": 560,
		"dataVersion": 2213,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "19w42a",
		"version": 559,
		"dataVersion": 2212,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "19w41a",
		"version": 558,
		"dataVersion": 2210,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "19w40a",
		"version": 557,
		"dataVersion": 2208,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "19w39a",
		"version": 556,
		"dataVersion": 2207,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "19w38b",
		"version": 555,
		"dataVersion": 2206,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "19w38a",
		"version": 554,
		"dataVersion": 2205,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "19w37a",
		"version": 553,
		"dataVersion": 2204,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "19w36a",
		"version": 552,
		"dataVersion": 2203,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "19w35a",
		"version": 551,
		"dataVersion": 2201,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "19w34a",
		"version": 550,
		"dataVersion": 2200,
		"usesNetty": true,
		"majorVersion": "1.15"
	},
	{
		"minecraftVersion": "1.14.4",
		"version": 498,
		"dataVersion": 1976,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.4-pre7",
		"version": 497,
		"dataVersion": 1975,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.4-pre6",
		"version": 496,
		"dataVersion": 1974,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.4-pre5",
		"version": 495,
		"dataVersion": 1973,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.4-pre4",
		"version": 494,
		"dataVersion": 1972,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.4-pre3",
		"version": 493,
		"dataVersion": 1971,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.4-pre2",
		"version": 492,
		"dataVersion": 1970,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.4-pre1",
		"version": 491,
		"dataVersion": 1969,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.3",
		"version": 490,
		"dataVersion": 1968,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.3-pre4",
		"version": 489,
		"dataVersion": 1967,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.3-pre3",
		"version": 488,
		"dataVersion": 1966,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.3-pre2",
		"version": 487,
		"dataVersion": 1965,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.3-pre1",
		"version": 486,
		"dataVersion": 1964,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.2",
		"version": 485,
		"dataVersion": 1963,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.2-pre4",
		"version": 484,
		"dataVersion": 1962,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.2-pre3",
		"version": 483,
		"dataVersion": 1960,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.2-pre2",
		"version": 482,
		"dataVersion": 1959,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.2-pre1",
		"version": 481,
		"dataVersion": 1958,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.1",
		"version": 480,
		"dataVersion": 1957,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.1-pre2",
		"version": 479,
		"dataVersion": 1956,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14.1-pre1",
		"version": 478,
		"dataVersion": 1955,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14",
		"version": 477,
		"dataVersion": 1952,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14-pre5",
		"version": 476,
		"dataVersion": 1951,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14-pre4",
		"version": 475,
		"dataVersion": 1950,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14-pre3",
		"version": 474,
		"dataVersion": 1949,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14-pre2",
		"version": 473,
		"dataVersion": 1948,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.14-pre1",
		"version": 472,
		"dataVersion": 1947,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w14b",
		"version": 471,
		"dataVersion": 1945,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w14a",
		"version": 470,
		"dataVersion": 1944,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w13b",
		"version": 469,
		"dataVersion": 1943,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w13a",
		"version": 468,
		"dataVersion": 1942,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w12b",
		"version": 467,
		"dataVersion": 1941,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w12a",
		"version": 466,
		"dataVersion": 1940,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w11b",
		"version": 465,
		"dataVersion": 1938,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w11a",
		"version": 464,
		"dataVersion": 1937,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w09a",
		"version": 463,
		"dataVersion": 1935,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w08b",
		"version": 462,
		"dataVersion": 1934,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w08a",
		"version": 461,
		"dataVersion": 1933,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w07a",
		"version": 460,
		"dataVersion": 1932,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w06a",
		"version": 459,
		"dataVersion": 1931,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w05a",
		"version": 458,
		"dataVersion": 1930,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w04b",
		"version": 457,
		"dataVersion": 1927,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w04a",
		"version": 456,
		"dataVersion": 1926,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w03c",
		"version": 455,
		"dataVersion": 1924,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w03b",
		"version": 454,
		"dataVersion": 1923,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w03a",
		"version": 453,
		"dataVersion": 1922,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "19w02a",
		"version": 452,
		"dataVersion": 1921,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "18w50a",
		"version": 451,
		"dataVersion": 1919,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "18w49a",
		"version": 450,
		"dataVersion": 1916,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "18w48b",
		"version": 449,
		"dataVersion": 1915,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "18w48a",
		"version": 448,
		"dataVersion": 1914,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "18w47b",
		"version": 447,
		"dataVersion": 1913,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "18w47a",
		"version": 446,
		"dataVersion": 1912,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "18w46a",
		"version": 445,
		"dataVersion": 1910,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "18w45a",
		"version": 444,
		"dataVersion": 1908,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "18w44a",
		"version": 443,
		"dataVersion": 1907,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "18w43c",
		"version": 442,
		"dataVersion": 1903,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "18w43b",
		"version": 441,
		"dataVersion": 1902,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "18w43a",
		"version": 441,
		"dataVersion": 1902,
		"usesNetty": true,
		"majorVersion": "1.14"
	},
	{
		"minecraftVersion": "1.13.2",
		"version": 404,
		"dataVersion": 1631,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13.2-pre2",
		"version": 403,
		"dataVersion": 1630,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13.2-pre1",
		"version": 402,
		"dataVersion": 1629,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13.1",
		"version": 401,
		"dataVersion": 1628,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13.1-pre2",
		"version": 400,
		"dataVersion": 1627,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13.1-pre1",
		"version": 399,
		"dataVersion": 1626,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w33a",
		"version": 398,
		"dataVersion": 1625,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w32a",
		"version": 397,
		"dataVersion": 1623,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w31a",
		"version": 396,
		"dataVersion": 1622,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w30b",
		"version": 395,
		"dataVersion": 1621,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w30a",
		"version": 394,
		"dataVersion": 1620,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13",
		"version": 393,
		"dataVersion": 1519,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13-pre10",
		"version": 392,
		"dataVersion": 1518,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13-pre9",
		"version": 391,
		"dataVersion": 1517,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13-pre8",
		"version": 390,
		"dataVersion": 1516,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13-pre7",
		"version": 389,
		"dataVersion": 1513,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13-pre6",
		"version": 388,
		"dataVersion": 1512,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13-pre5",
		"version": 387,
		"dataVersion": 1511,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13-pre4",
		"version": 386,
		"dataVersion": 1504,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13-pre3",
		"version": 385,
		"dataVersion": 1503,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13-pre2",
		"version": 384,
		"dataVersion": 1502,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.13-pre1",
		"version": 383,
		"dataVersion": 1501,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w22c",
		"version": 382,
		"dataVersion": 1499,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w22b",
		"version": 381,
		"dataVersion": 1498,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w22a",
		"version": 380,
		"dataVersion": 1497,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w21b",
		"version": 379,
		"dataVersion": 1496,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w21a",
		"version": 378,
		"dataVersion": 1495,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w20c",
		"version": 377,
		"dataVersion": 1493,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w20b",
		"version": 376,
		"dataVersion": 1491,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w20a",
		"version": 375,
		"dataVersion": 1489,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w19b",
		"version": 374,
		"dataVersion": 1485,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w19a",
		"version": 373,
		"dataVersion": 1484,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w16a",
		"version": 372,
		"dataVersion": 1483,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w15a",
		"version": 371,
		"dataVersion": 1482,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w14b",
		"version": 370,
		"dataVersion": 1481,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w14a",
		"version": 369,
		"dataVersion": 1479,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w11a",
		"version": 368,
		"dataVersion": 1478,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w10d",
		"version": 367,
		"dataVersion": 1477,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w10c",
		"version": 366,
		"dataVersion": 1476,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w10b",
		"version": 365,
		"dataVersion": 1474,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w10a",
		"version": 364,
		"dataVersion": 1473,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w09a",
		"version": 363,
		"dataVersion": 1472,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w08b",
		"version": 362,
		"dataVersion": 1471,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w08a",
		"version": 361,
		"dataVersion": 1470,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w07c",
		"version": 360,
		"dataVersion": 1469,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w07b",
		"version": 359,
		"dataVersion": 1468,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w07a",
		"version": 358,
		"dataVersion": 1467,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w06a",
		"version": 357,
		"dataVersion": 1466,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w05a",
		"version": 356,
		"dataVersion": 1464,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w03b",
		"version": 355,
		"dataVersion": 1463,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w03a",
		"version": 354,
		"dataVersion": 1462,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w02a",
		"version": 353,
		"dataVersion": 1461,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "18w01a",
		"version": 352,
		"dataVersion": 1459,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "17w50a",
		"version": 351,
		"dataVersion": 1457,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "17w49b",
		"version": 350,
		"dataVersion": 1455,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "17w49a",
		"version": 349,
		"dataVersion": 1454,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "17w48a",
		"version": 348,
		"dataVersion": 1453,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "17w47b",
		"version": 347,
		"dataVersion": 1452,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "17w47a",
		"version": 346,
		"dataVersion": 1451,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "17w46a",
		"version": 345,
		"dataVersion": 1449,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "17w45b",
		"version": 344,
		"dataVersion": 1448,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "17w45a",
		"version": 343,
		"dataVersion": 1447,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "17w43b",
		"version": 342,
		"dataVersion": 1445,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "17w43a",
		"version": 341,
		"dataVersion": 1444,
		"usesNetty": true,
		"majorVersion": "1.13"
	},
	{
		"minecraftVersion": "1.12.2",
		"version": 340,
		"dataVersion": 1343,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "1.12.2-pre2",
		"version": 339,
		"dataVersion": 1342,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "1.12.2-pre1",
		"version": 339,
		"dataVersion": 1341,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "1.12.1",
		"version": 338,
		"dataVersion": 1241,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "1.12.1-pre1",
		"version": 337,
		"dataVersion": 1240,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "17w31a",
		"version": 336,
		"dataVersion": 1239,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "1.12",
		"version": 335,
		"dataVersion": 1139,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "1.12-pre7",
		"version": 334,
		"dataVersion": 1138,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "1.12-pre6",
		"version": 333,
		"dataVersion": 1137,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "1.12-pre5",
		"version": 332,
		"dataVersion": 1136,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "1.12-pre4",
		"version": 331,
		"dataVersion": 1135,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "1.12-pre3",
		"version": 330,
		"dataVersion": 1134,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "1.12-pre2",
		"version": 329,
		"dataVersion": 1133,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "1.12-pre1",
		"version": 328,
		"dataVersion": 1132,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "17w18b",
		"version": 327,
		"dataVersion": 1131,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "17w18a",
		"version": 326,
		"dataVersion": 1130,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "17w17b",
		"version": 325,
		"dataVersion": 1129,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "17w17a",
		"version": 324,
		"dataVersion": 1128,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "17w16b",
		"version": 323,
		"dataVersion": 1127,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "17w16a",
		"version": 322,
		"dataVersion": 1126,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "17w15a",
		"version": 321,
		"dataVersion": 1125,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "17w14a",
		"version": 320,
		"dataVersion": 1124,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "17w13b",
		"version": 319,
		"dataVersion": 1123,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "17w13a",
		"version": 318,
		"dataVersion": 1122,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "17w06a",
		"version": 317,
		"dataVersion": 1022,
		"usesNetty": true,
		"majorVersion": "1.12"
	},
	{
		"minecraftVersion": "1.11.2",
		"version": 316,
		"dataVersion": 922,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "1.11.1",
		"version": 316,
		"dataVersion": 921,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "16w50a",
		"version": 316,
		"dataVersion": 920,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "1.11",
		"version": 315,
		"dataVersion": 819,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "1.11-pre1",
		"version": 314,
		"dataVersion": 818,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "16w44a",
		"version": 313,
		"dataVersion": 817,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "16w43a",
		"version": 313,
		"dataVersion": 817,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "16w42a",
		"version": 312,
		"dataVersion": 815,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "16w41a",
		"version": 311,
		"dataVersion": 814,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "16w40a",
		"version": 310,
		"dataVersion": 813,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "16w39c",
		"version": 309,
		"dataVersion": 812,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "16w39b",
		"version": 308,
		"dataVersion": 811,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "16w39a",
		"version": 307,
		"dataVersion": 809,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "16w38a",
		"version": 306,
		"dataVersion": 807,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "16w36a",
		"version": 305,
		"dataVersion": 805,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "16w35a",
		"version": 304,
		"dataVersion": 803,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "16w33a",
		"version": 303,
		"dataVersion": 802,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "16w32b",
		"version": 302,
		"dataVersion": 801,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "16w32a",
		"version": 301,
		"dataVersion": 800,
		"usesNetty": true,
		"majorVersion": "1.11"
	},
	{
		"minecraftVersion": "1.10.2",
		"version": 210,
		"dataVersion": 512,
		"usesNetty": true,
		"majorVersion": "1.10"
	},
	{
		"minecraftVersion": "1.10.1",
		"version": 210,
		"dataVersion": 511,
		"usesNetty": true,
		"majorVersion": "1.10"
	},
	{
		"minecraftVersion": "1.10",
		"version": 210,
		"dataVersion": 510,
		"usesNetty": true,
		"majorVersion": "1.10"
	},
	{
		"minecraftVersion": "1.10-pre2",
		"version": 205,
		"dataVersion": 507,
		"usesNetty": true,
		"majorVersion": "1.10"
	},
	{
		"minecraftVersion": "1.10-pre1",
		"version": 204,
		"dataVersion": 506,
		"usesNetty": true,
		"majorVersion": "1.10"
	},
	{
		"minecraftVersion": "16w21b",
		"version": 203,
		"dataVersion": 504,
		"usesNetty": true,
		"majorVersion": "1.10"
	},
	{
		"minecraftVersion": "16w21a",
		"version": 202,
		"dataVersion": 503,
		"usesNetty": true,
		"majorVersion": "1.10"
	},
	{
		"minecraftVersion": "16w20a",
		"version": 201,
		"dataVersion": 501,
		"usesNetty": true,
		"majorVersion": "1.10"
	},
	{
		"minecraftVersion": "1.9.4",
		"version": 110,
		"dataVersion": 184,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.9.3",
		"version": 110,
		"dataVersion": 183,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.9.3-pre3",
		"version": 110,
		"dataVersion": 182,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.9.3-pre2",
		"version": 110,
		"dataVersion": 181,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.9.3-pre1",
		"version": 109,
		"dataVersion": 180,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "16w15b",
		"version": 109,
		"dataVersion": 179,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "16w15a",
		"version": 109,
		"dataVersion": 178,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "16w14a",
		"version": 109,
		"dataVersion": 177,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.9.2",
		"version": 109,
		"dataVersion": 176,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.9.1",
		"version": 108,
		"dataVersion": 175,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.9.1-pre3",
		"version": 108,
		"dataVersion": 172,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.9.1-pre3",
		"version": 108,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.9.1-pre2",
		"version": 108,
		"dataVersion": 171,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.9.1-pre1",
		"version": 107,
		"dataVersion": 170,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.9",
		"version": 107,
		"dataVersion": 169,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.9-pre4",
		"version": 106,
		"dataVersion": 168,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.9-pre3",
		"version": 105,
		"dataVersion": 167,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.9-pre2",
		"version": 104,
		"dataVersion": 165,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.9-pre1",
		"version": 103,
		"dataVersion": 164,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "16w07b",
		"version": 102,
		"dataVersion": 163,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "16w07a",
		"version": 101,
		"dataVersion": 162,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "16w06a",
		"version": 100,
		"dataVersion": 161,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "16w05b",
		"version": 99,
		"dataVersion": 160,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "16w05a",
		"version": 98,
		"dataVersion": 159,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "16w04a",
		"version": 97,
		"dataVersion": 158,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "16w03a",
		"version": 96,
		"dataVersion": 157,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "16w02a",
		"version": 95,
		"dataVersion": 156,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w51b",
		"version": 94,
		"dataVersion": 155,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w51a",
		"version": 93,
		"dataVersion": 154,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w50a",
		"version": 92,
		"dataVersion": 153,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w49b",
		"version": 91,
		"dataVersion": 152,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w49a",
		"version": 90,
		"dataVersion": 151,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w47c",
		"version": 89,
		"dataVersion": 150,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w47b",
		"version": 88,
		"dataVersion": 149,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w47a",
		"version": 87,
		"dataVersion": 148,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w46a",
		"version": 86,
		"dataVersion": 146,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w45a",
		"version": 85,
		"dataVersion": 145,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w44b",
		"version": 84,
		"dataVersion": 143,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w44a",
		"version": 83,
		"dataVersion": 142,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w43c",
		"version": 82,
		"dataVersion": 141,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w43b",
		"version": 81,
		"dataVersion": 140,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w43a",
		"version": 80,
		"dataVersion": 139,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w42a",
		"version": 79,
		"dataVersion": 138,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w41b",
		"version": 78,
		"dataVersion": 137,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w41a",
		"version": 77,
		"dataVersion": 136,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w40b",
		"version": 76,
		"dataVersion": 134,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w40a",
		"version": 75,
		"dataVersion": 133,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w39c",
		"version": 74,
		"dataVersion": 132,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w39b",
		"version": 74,
		"dataVersion": 131,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w39a",
		"version": 74,
		"dataVersion": 130,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w38b",
		"version": 73,
		"dataVersion": 129,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w38a",
		"version": 72,
		"dataVersion": 128,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w37a",
		"version": 71,
		"dataVersion": 127,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w36d",
		"version": 70,
		"dataVersion": 126,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w36c",
		"version": 69,
		"dataVersion": 125,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w36b",
		"version": 68,
		"dataVersion": 124,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w36a",
		"version": 67,
		"dataVersion": 123,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w35e",
		"version": 66,
		"dataVersion": 122,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w35d",
		"version": 65,
		"dataVersion": 121,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w35c",
		"version": 64,
		"dataVersion": 120,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w35b",
		"version": 63,
		"dataVersion": 119,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w35a",
		"version": 62,
		"dataVersion": 118,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w34d",
		"version": 61,
		"dataVersion": 117,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w34c",
		"version": 60,
		"dataVersion": 116,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w34b",
		"version": 59,
		"dataVersion": 115,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w34a",
		"version": 58,
		"dataVersion": 114,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w33c",
		"version": 57,
		"dataVersion": 112,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w33b",
		"version": 56,
		"dataVersion": 111,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w33a",
		"version": 55,
		"dataVersion": 111,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w32c",
		"version": 54,
		"dataVersion": 104,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w32b",
		"version": 53,
		"dataVersion": 103,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w32a",
		"version": 52,
		"dataVersion": 100,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w31c",
		"version": 51,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w31b",
		"version": 50,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w31a",
		"version": 49,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "15w14a",
		"version": 48,
		"usesNetty": true,
		"majorVersion": "1.9"
	},
	{
		"minecraftVersion": "1.8.9",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.8",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.7",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.6",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.5",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.4",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.3",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.2",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.2-pre7",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.2-pre6",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.2-pre5",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.2-pre4",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.2-pre3",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.2-pre2",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.2-pre1",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.1",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.1-pre5",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.1-pre4",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.1-pre3",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.1-pre2",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8.1-pre1",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8",
		"version": 47,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8-pre3",
		"version": 46,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8-pre2",
		"version": 45,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.8-pre1",
		"version": 44,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w34d",
		"version": 43,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w34c",
		"version": 42,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w34b",
		"version": 41,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w34a",
		"version": 40,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w33c",
		"version": 39,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w33b",
		"version": 38,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w33a",
		"version": 37,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w32d",
		"version": 36,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w32c",
		"version": 35,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w32b",
		"version": 34,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w32a",
		"version": 33,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w31a",
		"version": 32,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w30c",
		"version": 31,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w30b",
		"version": 30,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w30a",
		"version": 30,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w29b",
		"version": 29,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w29a",
		"version": 29,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w28b",
		"version": 28,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w28a",
		"version": 27,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w27b",
		"version": 26,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w27a",
		"version": 26,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w26c",
		"version": 25,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w26b",
		"version": 24,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w26a",
		"version": 23,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w25b",
		"version": 22,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w25a",
		"version": 21,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w21b",
		"version": 20,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w21a",
		"version": 19,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w20b",
		"version": 18,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w20a",
		"version": 18,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w19a",
		"version": 17,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w18b",
		"version": 16,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w18a",
		"version": 16,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w17a",
		"version": 15,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w11b",
		"version": 14,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w11a",
		"version": 14,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w10c",
		"version": 13,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w10b",
		"version": 13,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w10a",
		"version": 13,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w08a",
		"version": 12,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w07a",
		"version": 11,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w06b",
		"version": 10,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w06a",
		"version": 10,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w05b",
		"version": 9,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w05a",
		"version": 9,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w04b",
		"version": 8,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w04a",
		"version": 7,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w03b",
		"version": 6,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w03a",
		"version": 6,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w02c",
		"version": 5,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w02b",
		"version": 5,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "14w02a",
		"version": 5,
		"usesNetty": true,
		"majorVersion": "1.8"
	},
	{
		"minecraftVersion": "1.7.10",
		"version": 5,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7.10-pre4",
		"version": 5,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7.10-pre3",
		"version": 5,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7.10-pre2",
		"version": 5,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7.10-pre1",
		"version": 5,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7.9",
		"version": 5,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7.8",
		"version": 5,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7.7",
		"version": 5,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7.6",
		"version": 5,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7.6-pre2",
		"version": 5,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7.6-pre1",
		"version": 5,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7.5",
		"version": 4,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7.4",
		"version": 4,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7.3-pre",
		"version": 4,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "13w49a",
		"version": 4,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "13w48b",
		"version": 4,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "13w48a",
		"version": 4,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "13w47e",
		"version": 4,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "13w47d",
		"version": 4,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "13w47c",
		"version": 4,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "13w47b",
		"version": 4,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "13w47a",
		"version": 4,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7.2",
		"version": 4,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7.1-pre",
		"version": 3,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.7-pre",
		"version": 3,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "13w43a",
		"version": 2,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "13w42b",
		"version": 1,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "13w42a",
		"version": 1,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "13w41b",
		"version": 0,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "13w41a",
		"version": 0,
		"usesNetty": true,
		"majorVersion": "1.7"
	},
	{
		"minecraftVersion": "1.6.4",
		"version": 78,
		"dataVersion": 137,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "1.6.2",
		"version": 74,
		"dataVersion": 132,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "1.6.1",
		"version": 73,
		"dataVersion": 129,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "1.6-pre",
		"version": 72,
		"dataVersion": 128,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "13w26a",
		"version": 72,
		"dataVersion": 128,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "13w25c",
		"version": 71,
		"dataVersion": 127,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "13w25b",
		"version": 71,
		"dataVersion": 127,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "13w25a",
		"version": 71,
		"dataVersion": 127,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "13w24b",
		"version": 70,
		"dataVersion": 126,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "13w24a",
		"version": 69,
		"dataVersion": 125,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "13w23b",
		"version": 68,
		"dataVersion": 124,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "13w23a",
		"version": 67,
		"dataVersion": 123,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "13w22a",
		"version": 67,
		"dataVersion": 123,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "13w21b",
		"version": 67,
		"dataVersion": 123,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "13w21a",
		"version": 67,
		"dataVersion": 123,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "13w19a",
		"version": 66,
		"dataVersion": 122,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "13w18a",
		"version": 65,
		"dataVersion": 121,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "13w17a",
		"version": 64,
		"dataVersion": 120,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "13w16b",
		"version": 63,
		"dataVersion": 119,
		"usesNetty": false,
		"majorVersion": "1.6"
	},
	{
		"minecraftVersion": "1.5.2",
		"version": 61,
		"dataVersion": 117,
		"usesNetty": false,
		"majorVersion": "1.5"
	},
	{
		"minecraftVersion": "1.5.1",
		"version": 60,
		"dataVersion": 116,
		"usesNetty": false,
		"majorVersion": "1.5"
	},
	{
		"minecraftVersion": "1.5",
		"version": 60,
		"dataVersion": 116,
		"usesNetty": false,
		"majorVersion": "1.5"
	},
	{
		"minecraftVersion": "13w09b",
		"version": 59,
		"dataVersion": 115,
		"usesNetty": false,
		"majorVersion": "1.5"
	},
	{
		"minecraftVersion": "13w06a",
		"version": 58,
		"dataVersion": 114,
		"usesNetty": false,
		"majorVersion": "1.5"
	},
	{
		"minecraftVersion": "13w05b",
		"version": 57,
		"dataVersion": 112,
		"usesNetty": false,
		"majorVersion": "1.5"
	},
	{
		"minecraftVersion": "13w05a",
		"version": 56,
		"dataVersion": 111,
		"usesNetty": false,
		"majorVersion": "1.5"
	},
	{
		"minecraftVersion": "13w04a",
		"version": 55,
		"dataVersion": 111,
		"usesNetty": false,
		"majorVersion": "1.5"
	},
	{
		"minecraftVersion": "13w03a",
		"version": 54,
		"dataVersion": 104,
		"usesNetty": false,
		"majorVersion": "1.5"
	},
	{
		"minecraftVersion": "13w02a",
		"version": 53,
		"dataVersion": 103,
		"usesNetty": false,
		"majorVersion": "1.5"
	},
	{
		"minecraftVersion": "13w01a",
		"version": 52,
		"dataVersion": 100,
		"usesNetty": false,
		"majorVersion": "1.5"
	},
	{
		"minecraftVersion": "1.4.7",
		"version": 51,
		"usesNetty": false,
		"majorVersion": "1.4"
	},
	{
		"minecraftVersion": "1.4.6",
		"version": 51,
		"usesNetty": false,
		"majorVersion": "1.4"
	},
	{
		"minecraftVersion": "12w49a",
		"version": 50,
		"usesNetty": false,
		"majorVersion": "1.4"
	},
	{
		"minecraftVersion": "1.4.5",
		"version": 49,
		"usesNetty": false,
		"majorVersion": "1.4"
	},
	{
		"minecraftVersion": "1.4.4",
		"version": 49,
		"usesNetty": false,
		"majorVersion": "1.4"
	},
	{
		"minecraftVersion": "1.4.3-pre",
		"version": 48,
		"usesNetty": false,
		"majorVersion": "1.4"
	},
	{
		"minecraftVersion": "1.4.2",
		"version": 47,
		"usesNetty": false,
		"majorVersion": "1.4"
	},
	{
		"minecraftVersion": "12w41a",
		"version": 46,
		"usesNetty": false,
		"majorVersion": "1.4"
	},
	{
		"minecraftVersion": "12w40a",
		"version": 45,
		"usesNetty": false,
		"majorVersion": "1.4"
	},
	{
		"minecraftVersion": "12w34b",
		"version": 42,
		"usesNetty": false,
		"majorVersion": "1.4"
	},
	{
		"minecraftVersion": "12w34a",
		"version": 41,
		"usesNetty": false,
		"majorVersion": "1.4"
	},
	{
		"minecraftVersion": "12w32a",
		"version": 40,
		"usesNetty": false,
		"majorVersion": "1.4"
	},
	{
		"minecraftVersion": "1.3.2",
		"version": 39,
		"usesNetty": false,
		"majorVersion": "1.3"
	},
	{
		"minecraftVersion": "1.3.1",
		"version": 39,
		"usesNetty": false,
		"majorVersion": "1.3"
	},
	{
		"minecraftVersion": "12w27a",
		"version": 38,
		"usesNetty": false,
		"majorVersion": "1.3"
	},
	{
		"minecraftVersion": "12w26a",
		"version": 37,
		"usesNetty": false,
		"majorVersion": "1.3"
	},
	{
		"minecraftVersion": "12w25a",
		"version": 37,
		"usesNetty": false,
		"majorVersion": "1.3"
	},
	{
		"minecraftVersion": "12w24a",
		"version": 36,
		"usesNetty": false,
		"majorVersion": "1.3"
	},
	{
		"minecraftVersion": "12w23a",
		"version": 35,
		"usesNetty": false,
		"majorVersion": "1.3"
	},
	{
		"minecraftVersion": "12w22a",
		"version": 34,
		"usesNetty": false,
		"majorVersion": "1.3"
	},
	{
		"minecraftVersion": "12w21ab",
		"version": 33,
		"usesNetty": false,
		"majorVersion": "1.3"
	},
	{
		"minecraftVersion": "12w19a",
		"version": 32,
		"usesNetty": false,
		"majorVersion": "1.3"
	},
	{
		"minecraftVersion": "12w18a",
		"version": 32,
		"usesNetty": false,
		"majorVersion": "1.3"
	},
	{
		"minecraftVersion": "12w17a",
		"version": 31,
		"usesNetty": false,
		"majorVersion": "1.3"
	},
	{
		"minecraftVersion": "12w16a",
		"version": 30,
		"usesNetty": false,
		"majorVersion": "1.3"
	},
	{
		"minecraftVersion": "1.2.5",
		"version": 29,
		"usesNetty": false,
		"majorVersion": "1.2"
	},
	{
		"minecraftVersion": "1.2.4",
		"version": 29,
		"usesNetty": false,
		"majorVersion": "1.2"
	},
	{
		"minecraftVersion": "1.2.3",
		"version": 28,
		"usesNetty": false,
		"majorVersion": "1.2"
	},
	{
		"minecraftVersion": "1.2.2",
		"version": 28,
		"usesNetty": false,
		"majorVersion": "1.2"
	},
	{
		"minecraftVersion": "1.2.1",
		"version": 28,
		"usesNetty": false,
		"majorVersion": "1.2"
	},
	{
		"minecraftVersion": "12w07a",
		"version": 27,
		"usesNetty": false,
		"majorVersion": "1.2"
	},
	{
		"minecraftVersion": "12w06a",
		"version": 25,
		"usesNetty": false,
		"majorVersion": "1.2"
	},
	{
		"minecraftVersion": "12w01a",
		"version": 24,
		"usesNetty": false,
		"majorVersion": "1.2"
	},
	{
		"minecraftVersion": "12w03a",
		"version": 24,
		"usesNetty": false,
		"majorVersion": "1.2"
	},
	{
		"minecraftVersion": "12w04a",
		"version": 24,
		"usesNetty": false,
		"majorVersion": "1.2"
	},
	{
		"minecraftVersion": "12w05a",
		"version": 24,
		"usesNetty": false,
		"majorVersion": "1.2"
	},
	{
		"minecraftVersion": "1.1",
		"version": 23,
		"usesNetty": false,
		"majorVersion": "1.1"
	},
	{
		"minecraftVersion": "1.0.0",
		"version": 22,
		"usesNetty": false,
		"majorVersion": "1.0"
	}
]

module.exports = {
	protocols
}