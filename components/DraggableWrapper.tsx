import { FunctionalComponent, h } from 'preact'
import { CSSProperties } from 'typescript-cssproperties'
import DefaultDraggable from './Draggable'

export interface DraggableWrapperProps {
  children?: any
  onMouseDown?: any
  onTouchStart?: any
}

const defaultStyle: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  touchAction: 'none',
}

const DraggableWrapper = ({
  children: Draggable = <DefaultDraggable size={40} />,
  onMouseDown,
  onTouchStart,
}: DraggableWrapperProps) => {
  return (
    <div style={defaultStyle} onMouseDown={onMouseDown} onTouchStart={onTouchStart}>
      {Draggable}
    </div>
  )
}

export default DraggableWrapper
