import React, { useEffect } from "react";
import { Flex, Grid, Spinner } from "@chakra-ui/react";
import Card from "../../../../components/Card/Card";
import CardBody from "../../../../components/Card/CardBody";
import ProductCard from "./ProjectCard";
import SearchBar from "./SearchBar";
import Banner from "../../../Market/MarketBanner";
import Categories from "./Category";

const Home = () => {
  

  const productList = {
    "products": [
        {
            "id": "prod_Q7gHfKFxSsYPhS",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1715952844,
            "default_price": null,
            "description": " Carbide - Free Certified.Alphonsos are loved for their sunshine yellow appearance & delightful taste and are one of the most consumed varieties in India. Alphonso mango got its name from a Portuguese general whose name was ‘Afonso de Albuquerque’.Portuguese were responsible for introducing grafting on mango trees to produce incredible varieties such as Alphonso.\n\nCountry of Origin : Handpicked from the best orchards of Ratnagiri\n\nShelf Life : 7 days",
            "features": [],
            "images": [
                "https://cdn.zeptonow.com/production///tr:w-1000,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/b5586d31-c6b3-46bd-a8f3-549950ed3e0a.jpeg"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "elonmusk001"
            },
            "name": "Mango Alphonso (Hapus)",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1715952844,
            "url": null
        },
        {
            "id": "prod_Q6aQDOIYmHNmOD",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1715700383,
            "default_price": null,
            "description": "Test Aws ",
            "features": [],
            "images": [
                "https://m.media-amazon.com/images/I/41wVYuZMNTL._SY445_SX342_.jpg"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "elonmusk001"
            },
            "name": "Test",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1715700383,
            "url": null
        },
        {
            "id": "prod_Q6ZZLiyzIC01de",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1715697217,
            "default_price": null,
            "description": "Veeba",
            "features": [],
            "images": [
                "https://veeba.in/cdn/shop/files/Crunchy_PeanutButter_Jar340g-01_159x202.jpg?v=1700031870"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "elonmusk001"
            },
            "name": "Test Aws",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1716227482,
            "url": null
        },
        {
            "id": "prod_Q6ZZ8H7u0FtY1n",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1715697216,
            "default_price": null,
            "description": "Veeba",
            "features": [],
            "images": [
                "https://veeba.in/cdn/shop/files/Crunchy_PeanutButter_Jar340g-01_159x202.jpg?v=1700031870"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "elonmusk001"
            },
            "name": "Test Aws",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1715697216,
            "url": null
        },
        {
            "id": "prod_PY7ptZwhubQ8Qz",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1707752293,
            "default_price": null,
            "description": "Handcrafted with love and care, these crunchy morsels bring the warmth of traditional Telugu kitchens to your table. \nUpdated on Feb 13 2024.",
            "features": [],
            "images": [
                "https://www.tasteoftelugu.com/_next/image?url=http%3A%2F%2Fadmin.tasteoftelugu.com%2Fuploads%2F1700055229_6132575189373ca3d990.jpg&w=1920&q=75"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "elonmusk001"
            },
            "name": "Saggubiyyam Vadiyalu 500gs",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1707834505,
            "url": null
        },
        {
            "id": "prod_PY7lcUXq2a70Pj",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1707752022,
            "default_price": null,
            "description": "Gongura, also known as Sorrel leaves, is a modest yet impactful ingredient in Southern India. These sharp, tangy leaves contain essential nutrients like Vitamin C, iron, zinc, and calcium. \nWhether savouring the renowned Royal Gongura Mutton curry or indulging in Gongura pickle at South Indian weddings, be prepared for a bold flavour adventure that tests your spice tolerance.\nFor the whole experience, serve Gongura with hot rice, a dollop of ghee, and some raw onions. Your taste buds will come alive, satisfying your craving for spicy delights.",
            "features": [],
            "images": [
                "https://www.tasteoftelugu.com/_next/image?url=http%3A%2F%2Fadmin.tasteoftelugu.com%2Fuploads%2F1698576135_70ad22a238074fd03c8c.jpg&w=1920&q=75"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "elonmusk001"
            },
            "name": "Gongura Pickle 250g",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1707752167,
            "url": null
        },
        {
            "id": "prod_PWf00sXiHB2AiK",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1707414380,
            "default_price": null,
            "description": "La American Bbq Pizza\n\nRoasted BBQ Cicken freshly baked Pizza with secret recipe cheesy, spicy & creamy jalapeno cheese sauce sprinkled with 100% mozarella cheese and served with inhouse Chilli flakes & Oregano seasoning",
            "features": [],
            "images": [
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/116276889A.png"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "elonmusk001"
            },
            "name": "Chicago Pizza  Pizzas, Fast Food",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1708629383,
            "url": null
        },
        {
            "id": "prod_PWev9QQ8LmQeMg",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1707414107,
            "default_price": null,
            "description": "Veeba Crunchy Peanut Butter with Vitamin A & D has 26% protein content to boost your daily protein intake in a tasty way. Crunchy texture with bits of Peanuts in every bite. Great peanut butter for children's tiffins and snacks.\n\nCrunchy Texture\nNo added colour\nTrans fat-free\nHow to Use:\nSpread it on your toast, roti or a cracker\nAdd to smoothies, cereals or oatmeal\nUse it as a topping for fruits, and desserts\nScoop it out of the jar and relish\n \n\nShelf life: 9 months from manufacturing date.\n\nQuantity: 340 g\n\nMarketed by VRB Consumer Products Private Limited, S.P.-17,  RIICO Industrial Area, Neemrana, District-Alwar, Rajasthan- 301705(India) and manufactured by Bonville Foods Pvt Ltd, S.R. No- 71 Near Sadhbav Cotton Ind., Lajai Jadeshwar Road at Hadmatiya(Palanpir), Tankara, Dist. Morbi- 363650, Rajkot(Gujarat).\n\n\nCountry of Origin – India",
            "features": [],
            "images": [
                "https://veeba.in/cdn/shop/files/Crunchy_PeanutButter_Jar340g-01_159x202.jpg?v=1700031870"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "elonmusk001"
            },
            "name": "CRUNCHY PEANUT BUTTER 500g",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1709195287,
            "url": null
        },
        {
            "id": "prod_PVrWKNIZeFcsxt",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1707230357,
            "default_price": null,
            "description": "Since its publication in 1937, Napoleon Hill’s seminal Think and Grow Rich has inspired generations of readers to develop their skills and become masters at anything to do. Inspired by Andrew Carnegie himself, Hill’s easy-to-follow guidebook to success is based on thirteen simple ‘steps’: 1. Desire 2. Faith 3. Autosuggestion 4. Specialized Knowledge 5. Imagination 6. Organized Planning 7. Decision 8. Persistence 9. Power of the Master Mind 10. The Mystery of Sex Transmutation 11. The Subconscious Mind 12. The Brain 13. The Sixth Sense Through a mixture of sound advice, income management methods, and personal anecdotes, Hill delivers the ultimate motivational message in Think and Grow Rich—and probably the only one you’ll ever need. Discover for yourself what makes this guidebook to better living one of the bestselling books of all time!",
            "features": [],
            "images": [
                "https://m.media-amazon.com/images/I/41DmBeq8oIL._SY445_SX342_.jpg"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "elonmusk001"
            },
            "name": "THINK AND GROW RICH (PB) Paperback – Illustrated, 5 January 2020",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1707230357,
            "url": null
        },
        {
            "id": "prod_PVrVdFBNTzF58N",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1707230258,
            "default_price": null,
            "description": "This remarkable book by Dr. Joseph Murphy, one of the pioneering voices of affirmative thinking, will unlock for you the truly staggering powers of your subconscious mind. Combining time-honored spiritual wisdom with cutting edge scientific research, Dr. Murphy explains how the subconscious mind influences every single thing that you do and how, by understanding it and learning to control its incredible force, you can improve the quality of your daily life.Everything, from the promotion that you wanted and the raise you think you deserve, to overcoming phobias and bad habits and strengthening interpersonal relationships, the Power of Your Subconscious Mind will open a world of happiness, success, prosperity and peace for you. It will change your life and your world by changing your beliefs.",
            "features": [],
            "images": [
                "https://m.media-amazon.com/images/I/41wVYuZMNTL._SY445_SX342_.jpg"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "elonmusk001"
            },
            "name": "The Power of Your Subconscious Mind Paperback – Advent Calendar, 1 February 2015",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1707230258,
            "url": null
        },
        {
            "id": "prod_PVpEJnn18D1EDz",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1707221813,
            "default_price": null,
            "description": "Enjoy the richness of cocoa with the goodness of real almonds in every bite of Hershey's Spreads\nAdd more yumminess to bread, roti, paratha, idli, dosa, cake, biscuit, fruit, waffle, doughnut, croissant and much more with Hershey's\nAvailable in Cocoa and Cocoa with almonds flavours",
            "features": [],
            "images": [
                "https://m.media-amazon.com/images/I/61SK0W-8ySS._SL1000_.jpg"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "elonmusk001"
            },
            "name": "Hershey's Spreads Cocoa with Almond, 350g",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1707221813,
            "url": null
        },
        {
            "id": "prod_PVozmcPvgV1srj",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1707220930,
            "default_price": null,
            "description": "This is a Vegetarian product.\n100% Organic Ghee made from cow milk\nHeat Stable, contains fat soluble nutrients & vitamins that help our bodies maintain good health\nIt's short chain of fatty acids are metabolized readily by the body\nNet Weight 500 ml",
            "features": [],
            "images": [
                "https://m.media-amazon.com/images/I/51YazYEJBsL._SL1080_.jpg"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "elonmusk001"
            },
            "name": "Organic India Pure Cow Ghee, 454.65 g",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1707221267,
            "url": null
        },
        {
            "id": "prod_PVor4Ci9biHcqI",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1707220440,
            "default_price": null,
            "description": "About this item\nSoft & breathable cotton knit fabric\nCombo pack of 2 T-shirts\nRound neck Solid t-shirt\nRib at neck for ease of wearing\nPair it with a classic pair of denim or shorts for an everyday casual look\nRefer to size for to pick your correct size",
            "features": [],
            "images": [
                "https://m.media-amazon.com/images/I/71DosJOQtUL._SY550_.jpg"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "Kiran124"
            },
            "name": "Amazon Brand - Symbol Men's Cotton Solid Round Neck Regular Fit T-Shirt (Pack of 2) (Available in Plus Size)",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1707220440,
            "url": null
        },
        {
            "id": "prod_PVobLV3vYsMfPz",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1707219475,
            "default_price": null,
            "description": " Testing prod 3 create product",
            "features": [],
            "images": [
                "https://rukminim2.flixcart.com/image/416/416/xif0q/shoe/l/i/m/6-397173-6-puma-sedate-grey-pel-yellow-sparkling-green-original-imagwhg7fwh5mgsv.jpeg?q=70&crop=false"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "Kiran124"
            },
            "name": "Test Prod 3",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1707219475,
            "url": null
        },
        {
            "id": "prod_PVoTLqCf8I2H9c",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1707218995,
            "default_price": null,
            "description": " Testing prod 1 create product",
            "features": [],
            "images": [
                "https://rukminim2.flixcart.com/image/416/416/xif0q/shoe/l/i/m/6-397173-6-puma-sedate-grey-pel-yellow-sparkling-green-original-imagwhg7fwh5mgsv.jpeg?q=70&crop=false"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "Kiran124"
            },
            "name": "Test Prod 1",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1707227602,
            "url": null
        },
        {
            "id": "prod_PVY6s0W7tFCRRj",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1707158064,
            "default_price": null,
            "description": " Testing prod 2 create product",
            "features": [],
            "images": [
                "https://files.stripe.com/links/MDB8YWNjdF8xT2M0UXRTRHlmeG5FVnEzfGZsX3Rlc3RfWHliNTlabkFNY2VWS0M2T2J4RzVSVUFY00lRn26ZY2"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org1234",
                "plotform_id": "impact123",
                "user_id": "Kiran124"
            },
            "name": "Test Prod 2",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1707227687,
            "url": null
        },
        {
            "id": "prod_PU2CvLteXdvffR",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1706808759,
            "default_price": null,
            "description": " Testing create product",
            "features": [],
            "images": [
                "https://picsum.photos/200"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {
                "org_id": "org123",
                "plotform_id": "impact123",
                "user_id": "Kiran123"
            },
            "name": "Test Prod 2",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1706809019,
            "url": null
        },
        {
            "id": "prod_PTxRO38fEgmJRe",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1706791050,
            "default_price": "price_1OezWJSDyfxnEVq3zAza6055",
            "description": "This is my test products.",
            "features": [],
            "images": [
                "https://files.stripe.com/links/MDB8YWNjdF8xT2M0UXRTRHlmeG5FVnEzfGZsX3Rlc3RfYXpiNmtjMEVheUUxcDVhNktXT0JBTU0100mjJy3Lq4"
            ],
            "livemode": false,
            "marketing_features": [],
            "metadata": {},
            "name": "Test Product",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1706791052,
            "url": null
        }
    ],
    "prices": [
        {
            "id": "price_1PHQvASDyfxnEVq3IZbqveXo",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1715952844,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_Q7gHfKFxSsYPhS",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 200,
            "unit_amount_decimal": "200"
        },
        {
            "id": "price_1PGNFDSDyfxnEVq3WUMU6UP4",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1715700383,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_Q6aQDOIYmHNmOD",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 2,
            "unit_amount_decimal": "2"
        },
        {
            "id": "price_1PGMQ9SDyfxnEVq3t6uP3Crx",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1715697217,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_Q6ZZLiyzIC01de",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 1,
            "unit_amount_decimal": "1"
        },
        {
            "id": "price_1PGMQ9SDyfxnEVq3H6VJcvln",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1715697217,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_Q6ZZ8H7u0FtY1n",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 1,
            "unit_amount_decimal": "1"
        },
        {
            "id": "price_1Oj1aESDyfxnEVq3l8pAbuyA",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1707752294,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_PY7ptZwhubQ8Qz",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 60,
            "unit_amount_decimal": "60"
        },
        {
            "id": "price_1Oj1VrSDyfxnEVq3agwTFVkL",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1707752023,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_PY7lcUXq2a70Pj",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 30,
            "unit_amount_decimal": "30"
        },
        {
            "id": "price_1Ohbg0SDyfxnEVq3s6Prx1Fy",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1707414380,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_PWf00sXiHB2AiK",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 40,
            "unit_amount_decimal": "40"
        },
        {
            "id": "price_1OhbbcSDyfxnEVq3kRtY0Bid",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1707414108,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_PWev9QQ8LmQeMg",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 23,
            "unit_amount_decimal": "23"
        },
        {
            "id": "price_1OgpntSDyfxnEVq3JNLxQtxq",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1707230357,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_PVrWKNIZeFcsxt",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 5,
            "unit_amount_decimal": "5"
        },
        {
            "id": "price_1OgpmISDyfxnEVq3ovpfX6Wm",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1707230258,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_PVrVdFBNTzF58N",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 20,
            "unit_amount_decimal": "20"
        },
        {
            "id": "price_1Ogna5SDyfxnEVq3ztXSP7AV",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1707221813,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_PVpEJnn18D1EDz",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 100,
            "unit_amount_decimal": "100"
        },
        {
            "id": "price_1OgnLrSDyfxnEVq3cwgO4ypx",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1707220931,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_PVozmcPvgV1srj",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 5,
            "unit_amount_decimal": "5"
        },
        {
            "id": "price_1OgnDxSDyfxnEVq3KKh9uzC0",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1707220441,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_PVor4Ci9biHcqI",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 4,
            "unit_amount_decimal": "4"
        },
        {
            "id": "price_1OgmyNSDyfxnEVq3iC3dAZ52",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1707219475,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_PVobLV3vYsMfPz",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 10,
            "unit_amount_decimal": "10"
        },
        {
            "id": "price_1OgmqdSDyfxnEVq3QbqmTvEC",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1707218995,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_PVoTLqCf8I2H9c",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 10,
            "unit_amount_decimal": "10"
        },
        {
            "id": "price_1OgWzsSDyfxnEVq36WPtqFJ4",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1707158064,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_PVY6s0W7tFCRRj",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 10,
            "unit_amount_decimal": "10"
        },
        {
            "id": "price_1Of4A5SDyfxnEVq3LjUE28oG",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1706808893,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_PU2CvLteXdvffR",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 1000,
            "unit_amount_decimal": "1000"
        },
        {
            "id": "price_1OezWJSDyfxnEVq3zAza6055",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1706791051,
            "currency": "usd",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_PTxRO38fEgmJRe",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 500,
            "unit_amount_decimal": "500"
        }
    ]
};

let productsLists ={}
  if (productList && productList.products && productList.prices) {
    productsLists = {
      products: productList.products.map((product) => ({
        ...product,
        prices: productList.prices.filter((price) => price.product === product.id),
      })),
    };
  }

  return (
    <Flex w="100%" minH="90vh" overflow="auto" direction="column">
      <Banner />
      <SearchBar />
      <Card bg="none">
        <Categories />
        <CardBody>
          {productsLists && productsLists.products && productsLists.products.length > 0 ? (
            <Grid
              templateColumns={{ sm:"repeat(2, 1fr)", md: "repeat(5, 1fr)",lg:"repeat(6, 1fr)", xl: "repeat(6, 1fr)" }}
              gap={2}
              justifyContent="center"
            >
              {productsLists.products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </Grid>
          ) : (
            <Flex
              alignItems="center"
              justifyContent="center"
              minHeight="50vh"
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#0648b3"
                size="xl"
              />
            </Flex>
          )}
        </CardBody>
      </Card>
    </Flex>
  );
};


export default Home
