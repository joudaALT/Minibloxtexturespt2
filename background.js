const URL_MAP = {
  "||miniblox.*textures/spritesheet.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/spritesheet.png",
  "||miniblox.*assets/Miniblox-Regular-Lz-C8nWS.otf": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/assets/Miniblox-Regular-Lz-C8nWS.otf",
  "||miniblox.*textures/entity/chicken/chicken.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/chicken.png",
  "||miniblox.*textures/entity/cow/cow.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/cow.png",
  "||miniblox.*textures/entity/creeper/creeper.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/creeper.png",
  "||miniblox.*textures/entity/pig/pig.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/pig.png", 
  "||miniblox.*textures/entity/sheep/sheep_fur.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/sheep_fur.png",
  "||miniblox.*textures/entity/skeleton/skeleton.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/skeleton.png",
  "||miniblox.*textures/entity/slime/slime.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/slime.png",
  "||miniblox.*textures/entity/spider/spider.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/spider.png",
  "||miniblox.*textures/entity/zombie/zombie.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/zombie.png",
  "||miniblox.*textures/entity/ghost/ghost.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/ghost.png",
  "||miniblox.*textures/entity/zombie_cowman/zombie_cowman.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/zombie_cowman.png",
  "||miniblox.*textures/entity/snowman/snowman.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/snowman.png",
  "||miniblox.*textures/entity/arrow.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/arrow.png",
  "||miniblox.*textures/entity/boat/acacia.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/acacia.png",
  "||miniblox.*textures/entity/boat/birch.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/birch.png",
  "||miniblox.*textures/entity/boat/dark_oak.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/dark_oak.png",
  "||miniblox.*textures/entity/boat/jungle.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/jungle.png",
  "||miniblox.*textures/entity/boat/oak.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/oak.png",
  "||miniblox.*textures/entity/boat/spruce.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/entity/spruce.png",
  "||miniblox.*textures/models/armor/chainmail_layer_1.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/chainmail_layer_1.png",
  "||miniblox.*textures/models/armor/chainmail_layer_2.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/chainmail_layer_2.png",
  "||miniblox.*textures/models/armor/diamond_layer_1.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/diamond_layer_1.png",
  "||miniblox.*textures/models/armor/diamond_layer_2.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/diamond_layer_2.png",
  "||miniblox.*textures/models/armor/emerald_layer_1.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/emerald_layer_1.png",
  "||miniblox.*textures/models/armor/emerald_layer_2.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/emerald_layer_2.png",
  "||miniblox.*textures/models/armor/infernium_layer_1.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/infernium_layer_1.png",
  "||miniblox.*textures/models/armor/infernium_layer_2.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/infernium_layer_2.png",
  "||miniblox.*textures/models/armor/gold_layer_1.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/gold_layer_1.png",
  "||miniblox.*textures/models/armor/gold_layer_2.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/gold_layer_2.png",
  "||miniblox.*textures/models/armor/iron_layer_1.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/iron_layer_1.png",
  "||miniblox.*textures/models/armor/iron_layer_2.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/iron_layer_2.png",
  "||miniblox.*textures/models/armor/leather_layer_1.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/leather_layer_1.png",
  "||miniblox.*textures/models/armor/leather_layer_2.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/armor/leather_layer_2.png",
  "||miniblox.*textures/misc/enchanted_item_glint.png": "https://raw.githubusercontent.com/heythereu/Miniblox-Textures/main/DEBUG/enchanted_item_glint.png"
};

let rules = [];
let idx = 1;

for (const [src, dst] of Object.entries(URL_MAP)) {
  rules.push({
    "id": idx++,
    "action": {
      "type": "redirect",
      "redirect": { "url": dst }
    },
    "condition": {
      "urlFilter": src,
      "resourceTypes": src.endsWith(".otf") ? ["font"] : ["image"]
    }
  });
}

chrome.declarativeNetRequest.updateDynamicRules(
  {
    addRules: rules,
    removeRuleIds: rules.map(rule => rule.id)
  },
  () => {
    if (chrome.runtime.lastError) {
      console.error("Error updating:", chrome.runtime.lastError);
    } else {
      console.log("Rules updated");
    }
  }
);