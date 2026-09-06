/* ═══════════════════════════════════════════
   站点数据 —— 加作品、改内容，只动这个文件
   （models/ 里放 GLB 文件，下面 MODELS 加一条即可）
   ═══════════════════════════════════════════ */

const SITE = {
  name: "Z坐标",                  // ← 站名/你的称呼
  email: "you@example.com",      // ← 换成你的联系邮箱
  wechat: "微信号：加我请备注「单子」", // ← 换成你的微信号，或改成二维码图片路径
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

/* 参与过的 Roblox 游戏 —— 占位两条，替换成真实游戏 */
const GAMES = [
  {
    title: "游戏名待填",
    role: "负责内容待填",
    desc: "一句话说明你在这个项目里做了什么、规模多大。",
    url: "https://www.roblox.com/games/0000000000", // ← 换成真实游戏链接
    cover: "", // ← 有宣传图就填路径，如 assets/images/game1.jpg
  },
  {
    title: "游戏名待填",
    role: "负责内容待填",
    desc: "一句话说明你在这个项目里做了什么、规模多大。",
    url: "https://www.roblox.com/games/0000000000",
    cover: "",
  },
];

/* 各处找我 —— 替换成你的真实主页地址 */
const LINKS = [
  {
    name: "Sketchfab",
    desc: "3D 模型主页",
    url: "https://sketchfab.com/你的用户名", // ← 替换
    icon: "sketchfab",
  },
  {
    name: "CG模型网",
    desc: "作品与素材主页",
    url: "https://www.cgmodel.com/你的主页", // ← 替换
    icon: "cgmodel",
  },
  {
    name: "Bilibili",
    desc: "过程记录与教程视频",
    url: "https://space.bilibili.com/你的UID", // ← 替换
    icon: "bilibili",
  },
];
