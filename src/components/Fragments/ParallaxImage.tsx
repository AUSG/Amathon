import { Parallax } from 'react-parallax'

interface IParallaxImageProps {
  image: string
}
export default function ParallaxImage(props: IParallaxImageProps) {
  return (
    <Parallax
      bgImage={props.image}
      strength={100}
    >
      <div style={{ height: '85vh' }} />
    </Parallax>
  )
}
