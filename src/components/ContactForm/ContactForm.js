import { Component } from 'react';

const INITIAL_STATE = {
    name: '',
    phone:'',
};

    
class ContactForm extends Component {
    state = INITIAL_STATE;

    handleChangeForm = ({ target }) => {
        const { name, value } = target;
        this.setState = ({ [name]: value })
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { name, phone } = this.state;
        const { onAdd } = this.props;

        const isValidatedForm = this.validateForm();

        if (!isValidatedForm) return;
        onAdd({name,phone})
    };

    validateForm = () => {
        const { name, phone } = this.state;
        const { onCheckUniqe } = this.props;
        if (!name || !phone) {
            alert('Some field is empty');
            return false
        }
        return onCheckUniqe(name);
    };

    resetForm = () => this.setState(INITIAL_STATE);


    render() {
        const { name, phone } = this.state;
        return (
            <form>
                <input type="text" name="name" placeholder="Enter name" value={} onChange />
                <input type="tel" name="phone" placeholder="Enter phone number" value={} onChange />
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

export default ContactForm;
