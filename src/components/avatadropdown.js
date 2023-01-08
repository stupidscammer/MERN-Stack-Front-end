import React from "react";
import { HLDropdown, HLMenu, HLCard } from "synos-helena";
import { Avatar } from "antd";
class DropdownView extends React.Component {
  render() {
    const menu = (
      <HLMenu>
        <HLMenu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            Log time
          </a>
        </HLMenu.Item>
        <HLMenu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            Add flag
          </a>
        </HLMenu.Item>
        <HLMenu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            Move
          </a>
        </HLMenu.Item>
      </HLMenu>
    );

    return (
      <HLCard>
        <HLDropdown overlay={menu} trigger={["click"]}>
          <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
        </HLDropdown>
      </HLCard>
    );
  }
}
 
export default DropdownView;
