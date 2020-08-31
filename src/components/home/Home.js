import React from 'react'
import PropTypes from 'prop-types'
import { Card, Elevation, H1, InputGroup, Button, Intent, Tag } from '@blueprintjs/core'
import style from './style'

export const Home = ({ appName, resetAppName, updateAppName }) => {
  const handleNameChange = event => updateAppName(event.target.value)
  const handleResetAppName = () => resetAppName()

  return (
    <main className={style.main}>
      <Card
        className={style.card}
        elevation={Elevation.TWO}
      >
        <H1>Welcome to {appName}</H1>
      </Card>
      <Card className={style.card}>
        <InputGroup
          className={style.input}
          leftElement={<Tag intent={Intent.PRIMARY}>App Name</Tag>}
          onChange={handleNameChange}
          rightElement={
            <Button
              intent={Intent.PRIMARY}
              minimal
              onClick={handleResetAppName}
              text='Reset'
            />
          }
          value={appName}
        />
      </Card>
    </main>
  )
}

Home.propTypes = {
  appName: PropTypes.string,
  resetAppName: PropTypes.func,
  updateAppName: PropTypes.func
}

export default Home
