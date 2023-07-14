import styles from "./text_field.module.scss";

interface Props {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}
const TextField = (props: Props) => {
  return (
    <input
      placeholder={props.label}
      {...props}
      className={styles.input}
      autoComplete="off"
      autoCorrect="off"
    />
  );
};

export default TextField;
