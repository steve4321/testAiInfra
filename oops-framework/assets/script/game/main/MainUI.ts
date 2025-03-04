/*
 * @Author: Your Name
 * @Date: 2024-01-01
 * @LastEditors: Your Name
 * @LastEditTime: 2024-01-01
 */
import { Component, _decorator, director } from "cc";
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../common/config/GameUIConfig";

const { ccclass, property } = _decorator;

@ccclass('MainUI')
export class MainUI extends Component {
    start() {
        // 初始化主界面
        console.log("MainUI initialized");
    }

    /** 打开设置界面示例 */
    private btn_open_settings() {
        // 这里可以添加打开设置界面的逻辑
        oops.gui.toast("打开设置界面", true);
    }

    /** 进入游戏 */
    private btn_enter_game() {
        oops.gui.toast("正在进入游戏...", true);
        // 这里添加进入游戏的具体逻辑
    }

    /** 退出游戏 */
    private btn_exit_game() {
        oops.gui.toast("正在退出游戏...", true);
        director.end();
    }

    /** 联机进入 */
    private btn_enter_online() {
        oops.gui.toast("正在连接服务器...", true);
        // 这里添加联机进入的具体逻辑
    }
}