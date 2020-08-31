import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button, Elevation } from '@blueprintjs/core'
import style from './style'

export const Hello = ({ comic, getLatestComic, hello }) => {
  return (
    <div className={style.hello}>
      <Card
        interactive
        elevation={Elevation.TWO}
      >
        <p>Hello</p>
        <Button>Click me</Button>
      </Card>
      <Button
        className={style.nested}
        onClick={() => getLatestComic()}
      >
        Get comic!
      </Button>
      {comic.length > 0 ? <img src={comic} /> : null}
      {hello}
    </div>
  )
}

Hello.displayName = 'Hello'

Hello.propTypes = {
  comic: PropTypes.string,
  getLatestComic: PropTypes.func,
  hello: PropTypes.string
}

export default Hello
