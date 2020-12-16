import React, {Component} from 'react';
import PropTypes from "prop-types";

class HellmannsCategories extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Object).isRequired,
      sectionTitle: PropTypes.string.isRequired
    };

    render() {
        const { 
          props: { children, sectionTitle },
        } = this;

        return (
            <section className="hellmanns-categories-section">
                <h2>{sectionTitle}</h2>
                <div className="hellmanns-boxes-section">
                    {children}
                </div>
                    
            </section>
        )
    }
}

export default HellmannsCategories;