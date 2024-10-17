import { DefaultButtonFonctioner } from '../functions/default.js';


class InteractPhoto {
    constructor() {
        // 页面各元素变量
        this.container = null;  // 容器
        this.canvas = null;     // 画布
        this.canvasInst = null; // 画布实例
        this.tips = null;       // 提示
        this.cursorCrd = null;  // 鼠标坐标
        this.inputTable = null; // 输入表格
        this.movable = false;   // 是否可移动
        this.panning = false;   // 是否正在移动画布
        this.text = null;       // 文本
        this.rect = null;       // 矩形
        this.map = null;        // 地图

        // 星体变量
        this.points = [];       // 星星点
        this.ptLabels = [];     // 星星标签
        this.numOfPts = 0;      // 星星数量

        // 铅垂线变量
        this.PLPoints = []; // 一条铅垂线的端点
        this.PLs = []; // 铅垂线
        this.numPL = 0; // 铅垂线数量
        this.numPLPoint = 0; // 铅垂线端点数量
        this.isMovingPLPoint = 0; // 是否正在选择铅垂线端点
        this.globalPLs = []; // 全局铅垂线

        // 鼠标事件变量
        this.lmbDon = false; // 鼠标左键是否按下
        this.cancelOp = false; // 是否取消选择星体or铅垂线的操作
        
        // 选择事件变量
        this.isPickingCele = false; // 是否正在选择天体
        this.isPickingPL = false;   // 是否正在选择铅垂线

        // 按钮功能状态变量
        this.defaultButtonFonctioner = new DefaultButtonFonctioner(this);
        this.buttonFonctioner = this.defaultButtonFonctioner; // 当前按钮事件对象
    }

    // 调整画布的缩放和视图位置
    reZoomCanvas(rect, alignRect = false, resize = true) {
        var scaleX = this.canvas.width / rect.width;
        var scaleY = this.canvas.height / rect.height;
        var scale = Math.min(scaleX, scaleY);
        var newX = this.canvas.width / 2 - rect.width / 2, newY = this.canvas.height / 2 - rect.height / 2
        if (alignRect)      this.canvas.setViewportTransform([1, 0, 0, 1, newX, newY]);
        else this.canvas.setViewportTransform([1, 0, 0, 1, this.canvas.width / 2, this.canvas.height / 2]);
        if (resize)     this.canvas.zoomToPoint({ x: this.canvas.width / 2, y: this.canvas.height / 2 }, scale);
    }

    // 鼠标模式
    setCanvasCursor(cursor) {
        this.canvasInst.style.cursor = cursor;
    }

    // 重置按钮功能状态
    resetButtonFonctioner() {
        this.buttonFonctioner = this.defaultButtonFonctioner;
    }
}


export { InteractPhoto };