import React from 'react'
import {ToggleGroup} from '../Button'
import PropTypes from 'prop-types'

const PathToggleGroup = props => {
  const {routes,shortened,start} = props;

  const fullPath = window.location.pathname; 

  let currentRouteIndex;

  //* Loop Through All The Routes Returning New Route Values 
  const parsedRoutes = routes.map(route=>`/${shortened?route[0].toLowerCase():route.toLowerCase()}`)

  const parsedToggles = routes.map((route,i)=>{ 

    //* Cut "fullPath" Into Smaller Pieces By Routes
    const fullPathRoutes = fullPath.match(/(\/)\w+/g); 
    const lastFPR = fullPathRoutes[fullPathRoutes.length-1]

    //* Check If Current FullPath Includes Any Parsed Routes
    const isOnRoute = parsedRoutes.includes(lastFPR)

    //* Parse "fullPath" Depending On "isOnRoute"
    const parsedFullPath = !isOnRoute?fullPath:fullPath.replace(lastFPR,'')

    //* Rewrites Start Path Depending On "isOnRoute"
    const parsedStart = start||parsedFullPath; 

    //* Check If Current Route Is Within Path
    if(fullPath.includes(parsedRoutes[i])){
      currentRouteIndex = i;
    }

    return {
      label:route,
      to:shortened?`${parsedStart}${parsedRoutes[i]}`:`${parsedStart}${parsedRoutes[i]}`,
    }
  })

  return (
    <ToggleGroup
      {...props}
      value={currentRouteIndex}
      toggles={parsedToggles}
    />
  )
}

PathToggleGroup.propTypes = {
  /** Width Of Button Within Toggle Group */
  width: PropTypes.string,

  /** Size Prop Given To Each Child Component */
  size: PropTypes.oneOf(['smaller','small','large','larger']),
  
  /** Routes Displayed & Checked Within The Path Toggle Group */
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,

  /** Starting Path For All Routes */
  start: PropTypes.string.isRequired,
  
  /** Are Route Values Shortened To Single Characters? 
   * Ex: /account => /a */
  shortened: PropTypes.bool
}

export default PathToggleGroup