import React, { Fragment, useState } from "react";
import { Button, Input, Modal } from "antd";
import { TSchema } from "../../../interface";


export function InjectSchemaModel(props: React.PropsWithoutRef<{
  setSchemaList: React.Dispatch<React.SetStateAction<TSchema[]>>,
  schemaModelJSONCache: React.MutableRefObject<any>,
}>){
  const { setSchemaList, schemaModelJSONCache }= props
  const [visible, setVisible]= useState(false)
  const [value, setValue]= useState('')

  const handleInjectSchemaModel= () => {
    schemaModelJSONCache.current= JSON.parse(value)
    setSchemaList(schemaModelJSONCache.current.schemaList)
    setVisible(false)
  }

  return (
    <Fragment>
      <Button type="primary" onClick={() => setVisible(true)}>注入模板</Button>
      <Modal title="注入schemaModel" width='50vw'
        bodyStyle={{height: '60vh', overflow: 'auto'}} 
        visible={visible} 
        onOk={handleInjectSchemaModel} 
        okButtonProps={{disabled: !value}}
        onCancel={() => setVisible(false)}
        >
        <Input.TextArea value={value} onChange={e => setValue(e.target.value)} allowClear autoSize={{ minRows: 6 }} placeholder="请黏贴JSON格式的schemaModel～" />
      </Modal>
    </Fragment>
  )
}