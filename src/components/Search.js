import React, { Component } from 'react';

import { Icon } from 'semantic-ui-react';

class Search extends Component {

    render() {
        return (
            <div className={style.homeContainer}>
                <div className={style.homeSearchContainer}>
                    <div className={style.searchContainer}>
                        <Input className={style.search} size='big' icon='search' placeholder='Search...'/>
                    </div>
                </div>
                <div className={style.newFeedContainer}>
                    new feeds
                </div>
            </div>
        )
    }

}

export default Search