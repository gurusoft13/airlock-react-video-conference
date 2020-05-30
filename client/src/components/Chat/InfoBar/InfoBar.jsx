import React from 'react'
import { CloseIcon } from '../../Icons/Icons'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  infoBar: {
    background: '#2979ff',
    borderRadius: '4px 4px 0 0',
    height: '10%',
    alignSelf: 'flex-start',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  leftInnerContainer: {
    flex: '0.8',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5%',
    color: 'white',
  },

  rightInnerContainer: {
    display: 'flex',
    flex: '0.2',
    justifyContent: 'flex-end',
    marginRight: '5%',
  },
}))

const InfoBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.infoBar}>
      <div className={classes.leftInnerContainer}>Adrian Hajdin</div>
      <div className={classes.rightInnerContainer}>
        <CloseIcon />
      </div>
    </div>
  )
}

export default InfoBar