import React, {Component} from 'react';
import PropTypes from "prop-types";

class DomestosCategories extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Object).isRequired,
      sectionTitle: PropTypes.string.isRequired
    };

    render() {
        const { 
          props: { children, sectionTitle },
        } = this;

        return (
            <section className="domestos-categories-section">
                <h2>{sectionTitle}</h2>
                <div className="domestos-boxes-section">
                    {children}
                </div>
                    
            </section>
        )
    }
}

export default DomestosCategories;