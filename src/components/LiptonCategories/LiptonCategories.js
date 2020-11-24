import React, {Component} from 'react';
import PropTypes from "prop-types";

class LiptonCategories extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Object).isRequired,
    };

    render() {
        const { 
          props: { children },
        } = this;

        return (
            <section className="categories-section">
                <h2>Explore our categories</h2>
                <div className="boxes-section">
                    {children}
                </div>
                    
            </section>
        )
    }
}

export default LiptonCategories;