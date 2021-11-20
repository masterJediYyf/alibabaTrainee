import React, { useRef, useState } from 'react'
import { TItemStore, TOnGetSchemaModel, TSchema } from '../interface'
import { LeggoLeft } from './LeggoLeft';
import { LeggoRight } from './LeggoRight'
import { LeggoMiddle } from './LeggoMiddle'
import { leggoItemStore } from '../service';


export function LeggoConfigs(props: React.PropsWithChildren<{ onGetSchemaModel: TOnGetSchemaModel }>) {
  const activeSchema= useRef<TSchema>(null)
  const [schemaList, setSchemaList]= useState<TSchema[]>([])
  const [ , setForceRender]= useState(0)
  const forceRender= () => setForceRender(pre => pre+1)

  return (
    <div className="leggo-configs">
      <LeggoLeft />
      <LeggoMiddle 
        schemaList={schemaList} 
        setSchemaList={setSchemaList} 
        activeSchema={activeSchema} 
        forceRender={forceRender} 
        onGetSchemaModel={props.onGetSchemaModel} 
      />
      <LeggoRight 
        schemaList={schemaList} 
        activeSchema={activeSchema} 
        forceRender={forceRender} 
      />
    </div>
  )
}

LeggoConfigs.registerItemStore= (itemStore: TItemStore) => {
  const { storeName, store }= itemStore
  //@ts-ignore
  if(!leggoItemStore[storeName]){
    //@ts-ignore
    leggoItemStore[storeName]= store
    leggoItemStore.total= {...store, ...leggoItemStore.total}
  }
}
