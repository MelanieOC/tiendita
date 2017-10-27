import californiaRolls from './img/california-rolls.jpg';
import chickenTeriyaki from './img/chicken-teriyaki.jpg';
import chirashiSushi from './img/chirashi-sushi.jpg';
import ebiRolls from './img/ebi-rolls.jpg';
import edamame from './img/edamame.jpg';
import gohan from './img/gohan.jpg';
import hosomakiMix from './img/hosomaki-mix.jpg';
import maguro from './img/maguro.jpg';
import misoSoup from './img/miso-soup.jpg';
import salmonTeriyaki from './img/salmon-teriyaki.jpg';
import sashimiSalad from './img/sashimi-salad.jpg';
import seattleRolls from './img/seattle-rolls.jpg';
import seaweedSalad from './img/seaweed-salad.jpg';
import shake from './img/shake.jpg';
import shiromi from './img/shiromi.jpg';
import spicytunaRolls from './img/spicytuna-rolls.jpg';
import tekkaMaki from './img/tekka-maki.jpg';
import toriKatsu from './img/tori-katsu.jpg';
import yakiUdon from './img/yaki-udon.jpg';

const products = [
    {
        dish: 'Sashimi Salad',
        price: 12,
        description: 'Organic greens topped with fresh sashimi, wasabi soy vinaigrette.',
        nutricionalInform: {
            protein: 2.9156,
            fat_total: 2.4396,
            carbohydrate: 2.4396,
            energy_kJ: 17.5775,
            energy_kcal: 4.2011,
            sugar: 0.3738
        },
        image: sashimiSalad,
        amount: 1
    },
    {
        dish: 'Chirashi sushi',
        price: 21,
        description: 'Sushi bar variety with sushi rice.',
        nutricionalInform: {
            protein: 2.3138,
            fat_total: 0.6041,
            carbohydrate: 0.6041,
            energy_kJ: 7.5314,
            energy_kcal: '1.8000',
            sugar: 0.3114
        },
        image: chirashiSushi,
        amount: 0
    },
    {
        dish: 'Seaweed salad',
        price: 17,
        description: 'A nice seaweed salad.',
        nutricionalInform: {
            protein: 0.229,
            fat_total: 2.2852,
            carbohydrate: 2.2852,
            energy_kJ: 5.1003,
            energy_kcal: '1.2190',
            sugar: 0.0037
        },
        image: seaweedSalad,
        amount: 0
    },
    {
        dish: 'Edamame',
        price: 4,
        description: 'Boiled soy beans with salt',
        nutricionalInform: {
            protein: 0.7436,
            fat_total: 1.9771,
            carbohydrate: 1.9771,
            energy_kJ: 17.294,
            energy_kcal: 4.1334,
            sugar: 0.1028
        },
        image: edamame,
        amount: 0
    },
    {
        dish: 'Miso soup',
        price: 4,
        description: 'Soy bean soup with Wacame seaweed, tofu and spring onion.',
        nutricionalInform: {
            protein: 2.7642,
            fat_total: 2.1552,
            carbohydrate: 2.1552,
            energy_kJ: 9.393,
            energy_kcal: '2.2450',
            sugar: 0.1399
        },
        image: misoSoup,
        amount: 0
    },
    {
        dish: 'Maguro',
        price: 12.5,
        description: 'Tuna pieces.',
        nutricionalInform: {
            protein: 2.2293,
            fat_total: 2.7329,
            carbohydrate: 2.7329,
            energy_kJ: 28.2176,
            energy_kcal: 6.7442,
            sugar: 0.4018
        },
        image: maguro,
        amount: 0
    },
    {
        dish: 'Shake',
        price: 10,
        description: ' ',
        nutricionalInform: {
            protein: 1.4804,
            fat_total: 1.4739,
            carbohydrate: 1.4739,
            energy_kJ: 16.9406,
            energy_kcal: 4.0489,
            sugar: 0.245
        },
        image: shake,
        amount: 0
    },
    {
        dish: 'Shiromi',
        price: 9.5,
        description: 'White fish pieces.',
        nutricionalInform: {
            protein: 0.2814,
            fat_total: 1.3963,
            carbohydrate: 1.3963,
            energy_kJ: 16.4487,
            energy_kcal: 3.9313,
            sugar: 0.0509
        },
        image: shiromi,
        amount: 0
    },
    {
        dish: 'Tekka maki',
        price: 6,
        description: 'Tuna roll with wasabi. - 6 pieces',
        nutricionalInform: {
            protein: 0.9559,
            fat_total: 1.6395,
            carbohydrate: 1.6395,
            energy_kJ: 9.7847,
            energy_kcal: 2.3386,
            sugar: 0.4771
        },
        image: tekkaMaki,
        amount: 0
    },
    {
        dish: 'Hosomaki Mix',
        price: 17,
        description: '18 pieces.',
        nutricionalInform: {
            protein: 2.683,
            fat_total: 2.858,
            carbohydrate: 2.858,
            energy_kJ: 23.8901,
            energy_kcal: 5.7099,
            sugar: 0.4839
        },
        image: hosomakiMix,
        amount: 0
    },
    {
        dish: 'California rolls',
        price: 7.75,
        description: 'Crab sticks, avocado and cucumber. - 8 pieces',
        nutricionalInform: {
            protein: 0.848,
            fat_total: 0.1205,
            carbohydrate: 0.1205,
            energy_kJ: 18.6541,
            energy_kcal: 4.4584,
            sugar: 0.0174
        },
        image: californiaRolls,
        amount: 0
    },
    {
        dish: 'Seattle rolls',
        price: 8,
        description: 'Smoked salmon. Cucumber. Cream cheese.',
        nutricionalInform: {
            protein: 2.2802,
            fat_total: 2.309,
            carbohydrate: 2.309,
            energy_kJ: 18.6961,
            energy_kcal: 4.4685,
            sugar: 0.2533
        },
        image: seattleRolls,
        amount: 0
    },
    {
        dish: 'Spicy Tuna rolls',
        price: 6,
        description: 'Spicy tuna, spring onion and avocado. - 6 pieces',
        nutricionalInform: {
            protein: 1.0003,
            fat_total: 1.5621,
            carbohydrate: 1.5621,
            energy_kJ: 25.0911,
            energy_kcal: 5.9969,
            sugar: 0.0474
        },
        image: spicytunaRolls,
        amount: 0
    },
    {
        dish: 'Ebi rolls',
        price: 8,
        description: 'King prawns, avocado and asparagus. - 8 pieces',
        nutricionalInform: {
            protein: 2.826,
            fat_total: 2.854,
            carbohydrate: 2.854,
            energy_kJ: 19.2756,
            energy_kcal: '4.6070',
            sugar: 0.439
        },
        image: ebiRolls,
        amount: 0
    },
    {
        dish: 'Chicken Teriyaki',
        price: 12,
        description: 'Sauted chicken with teiyaki sauce.',
        nutricionalInform: {
            protein: 2.2375,
            fat_total: 2.6376,
            carbohydrate: 2.6376,
            energy_kJ: 18.7052,
            energy_kcal: 4.4707,
            sugar: 0.4271
        },
        image: chickenTeriyaki,
        amount: 0
    },
    {
        dish: 'Salmon Teriyaki',
        price: 13.5,
        description: 'Sauted salmon with teriyaki sauce.',
        nutricionalInform: {
            protein: 2.5748,
            fat_total: 0.0234,
            carbohydrate: 0.0234,
            energy_kJ: 22.7136,
            energy_kcal: 5.4287,
            sugar: 0.1158
        },
        image: salmonTeriyaki,
        amount: 0
    },
    {
        dish: 'Gohan',
        price: 3,
        description: 'Steamed rice.',
        nutricionalInform: {
            protein: 2.4622,
            fat_total: 2.672,
            carbohydrate: 2.672,
            energy_kJ: 25.1129,
            energy_kcal: 6.0021,
            sugar: 0.3426
        },
        image: gohan,
        amount: 0
    },
    {
        dish: 'Tori Katsu',
        price: 11,
        description: 'Pan-fried chicken breast with yasai salad.',
        nutricionalInform: {
            protein: 1.0267,
            fat_total: 2.2143,
            carbohydrate: 2.2143,
            energy_kJ: 17.8688,
            energy_kcal: 4.2707,
            sugar: 0.0161
        },
        image: toriKatsu,
        amount: 0
    },
    {
        dish: 'Yaki Udon',
        price: 11.5,
        description: 'Udon noddles with chicken, king prawns and vegetables.',
        nutricionalInform: {
            protein: 1.7697,
            fat_total: 0.2534,
            carbohydrate: 0.2534,
            energy_kJ: 7.508,
            energy_kcal: 1.7945,
            sugar: 0.1798
        },
        image: yakiUdon,

        amount: 0
    }
]

export default products;