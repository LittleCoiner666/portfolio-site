/* ═══════════════════════════════════════════
   站点数据 —— 加作品、改内容，只动这个文件
   （models/ 里放 GLB 文件，下面 MODELS 加一条即可）
   ═══════════════════════════════════════════ */

const SITE = {
  name: "Z坐标",                  // ← 站名/你的称呼
  email: "2311387412@qq.com",
  wechat: "LittleCoiner",
  icp: "",                       // ← 备案下来后填："京ICP备xxxx号"
};

/* 接单种类（预填示例，请按你实际接的范围改） */
const SERVICES = [
  {
    title: "角色 / 道具建模",
    desc: "Blender 全流程：雕刻、重拓扑、烘焙贴图，导出 Roblox 直接可用的格式。",
  },
  {
    title: "动画与装配",
    desc: "Rig 装配、动画转换、引擎内动画问题排查。AnimPilot 作者，这条管线我自己写过工具。",
  },
  {
    title: "场景与资产整备",
    desc: "从参考图到上线资产：LOD、碰撞体、材质合并与优化，交付即用。",
  },
  {
    title: "渲染与展示图",
    desc: "项目的宣传渲染图与短视频剪辑，甲方拿去就能发。",
  },
];

/* 3D 作品 —— 现在放的是两个演示占位，换成你的精选代表作 */
const MODELS = [
  {
    title: "中式布老虎",
    en: "Fabric Tiger",
    desc: "布料质感的玩具类道具：布纹、缝线与做旧处理。",
    file: "assets/models/fabric-tiger.glb",
    meta: "GLB · 1.3 MB · <b>已优化</b>",
    orbit: "-30deg 72deg auto",
  },
  {
    title: "深海鮟鱇鱼",
    en: "Anglerfish",
    desc: "生物类角色：鳞片细节、自发光诱饵灯与深海配色。",
    file: "assets/models/anglerfish.glb",
    meta: "GLB · 0.4 MB · <b>已优化</b>",
    orbit: "20deg 80deg auto",
  },
];

/* 参与过的 Roblox 游戏 */
const GAMES = [
  {
    title: "Duel Warriors",
    role: "角色装备 · 场景元素",
    desc: "游戏内绝大部分角色装备由我们团队制作，并负责部分场景元素。",
    url: "https://www.roblox.com/games/100400297022629/Duel-Warriors",
    cover: "assets/images/duel-warriors.jpg",
  },
  {
    title: "Allblox Battles",
    role: "角色装备",
    desc: "游戏内大部分角色装备出自我们团队。",
    url: "https://www.roblox.com/games/17564320769/Allblox-Battles",
    cover: "assets/images/allblox-battles.jpg",
  },
  {
    title: "Boxing Clicker Simulator",
    role: "3D 美术",
    desc: "游戏内绝大部分 3D 美术由我们团队制作。",
    url: "https://www.roblox.com/games/14361173627/Boxing-Clicker-Simulator",
    cover: "assets/images/boxing-clicker.jpg",
  },
];

/* 教程与课程 */
const TUTORIALS = [
  {
    title: "罗布乐思官方美术课",
    role: "讲师",
    desc: "以官方讲师身份在 B站「罗布乐思开发者」出品的美术教学系列。",
    stats: "<b>8</b> 节官方教程 · 最高单集 <b>10.5 万</b>播放 · 官号 <b>9.7 万</b>粉",
    url: "https://space.bilibili.com/402416759/lists/3213147?type=season",
    cta: "去官号看 ↗",
  },
  {
    title: "Blender + Roblox 动画 NPC 全流程",
    role: "系列课",
    desc: "从建模到动画上身的完整工作流教学。",
    stats: "<b>16</b> 课时 · <b>1.5 万</b>播放",
    url: "https://www.bilibili.com/cheese/play/ss30595",
    cta: "去个人号看 ↗",
  },
];

/* 各处找我 */
const LINKS = [
  {
    name: "Sketchfab",
    desc: "3D 模型主页",
    url: "https://sketchfab.com/LittleZCoordinate",
    icon: "sketchfab",
  },
  {
    name: "CG模型网",
    desc: "作品与素材主页",
    url: "https://www.cgmodel.com/designer/1276659.html",
    icon: "cgmodel",
  },
  {
    name: "Bilibili",
    desc: "过程记录与教程视频",
    url: "https://space.bilibili.com/473519717",
    icon: "bilibili",
  },
];
