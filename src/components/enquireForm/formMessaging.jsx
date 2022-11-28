import styles from './formMessaging.module.css';

function FormMessaging(props) {
    const { isError, content } = props;
    // console.log('error prop', props.isError);
    // console.log(classes);

    return (
        <div className={isError ===true ? styles.success : styles.error}>
            {content}
        </div>
        // <div className={
        //     props.isError ? classes.error : classes.success
        // }>
        //     {props.content}
        // </div>
    );
}

export default FormMessaging;