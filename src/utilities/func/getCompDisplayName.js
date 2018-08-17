
/**
 * Return the display name of a wrapped component
 */

export default function getCompDisplayName(WrappedComponent) {

  return WrappedComponent.displayName || WrappedComponent.name || 'Component';

}
