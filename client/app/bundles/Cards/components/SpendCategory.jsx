import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/spend-categories.scss';

import SpendInputContainer from '../containers/SpendInputContainer';

class SpendCategory extends React.Component {
  render() {
    return (
      <div className={styles.spendCategory}>
        <h4 className={styles.name}>{this.props.name}</h4>

        <SpendInputContainer
          spendCategoryId={this.props.id}
        />
      </div>
    );
  }
}

SpendCategory.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default SpendCategory;
