export default function Output(props) {
  console.log(props.checkboxCheckedState)
  return (
    <div className={'outputContainer'}>
      <p>TextInput: {props.textState}</p>
      <p>RadioSelection: {props.radioState}</p>
      <p>Checkbox: {props.checkboxCheckedState === true ? 'True' : 'False'}</p>
    </div>
  )
}
