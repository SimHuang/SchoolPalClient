import React, { Component } from 'react';

import { Icon } from 'semantic-ui-react';
import styles from '../../style/components/search.css';

class Search extends Component {

    render() {
        return (
            <div className={styles.searchContainer}>
                <input className={styles.searchBarInput} type="text" placeholder="Search School"/>
                <input className={styles.searchButtonInput} type="button" value="Search"/>
            </div>
        )
    }
}

export default Search