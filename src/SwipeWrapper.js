import React from 'react';
import {
  string,
  node,
  number,
  func,
  bool
} from 'prop-types';
import { useSwipeable } from 'react-swipeable';

const SwipeWrapper = ({
  children,
  className,
  delta,
  onSwiping,
  onSwiped,
  preventScrollOnSwipe,
}) => {
  const swipeHandlers = useSwipeable({
    delta,
    onSwiping,
    onSwiped,
    preventScrollOnSwipe,
  });
  return (
    <div {...swipeHandlers} className={className}>
      {children}
    </div>
  );
};

SwipeWrapper.propTypes = {
  children: node.isRequired,
  className: string,
  delta: number,
  onSwiped: func,
  onSwiping: func,
  preventScrollOnSwipe: bool,
};

SwipeWrapper.defaultProps = {
  className: '',
  delta: 0,
  onSwiping: () => {},
  onSwiped: () => {},
  preventScrollOnSwipe: false
};

export default SwipeWrapper;
