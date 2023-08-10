import React, { useState } from "react";
import { Drawer, Button } from "antd";

const Dragger = (props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
    
  };
  const onClose = () => {
    setOpen(false);
    window.location.reload()
  };

  const content = props.content
  return (
    <>
     <Button
          type="primary"
          htmlType="submit"
          style={{ marginLeft: "30px", marginTop: "20px" }}
          onClick={showDrawer}
        >
            Submit
        </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
      {content}
      </Drawer>
    </>
  );
};

export default Dragger;
