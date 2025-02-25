import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles';
export default function FilterBtn({label,isActive,setFilter}) {
 let btnStyle = styles.filterBtn;
 let txtStyle = styles.filterText;
 if(isActive){
    btnStyle = {...btnStyle, ...styles.activeFilterBtn}
    txtStyle = {...txtStyle,...styles.activeFilterText}
}

  return (
        <TouchableOpacity
         style={btnStyle}
         activeOpacity={0.8}
         onPress={()=>setFilter(label)}
         >
          <Text style={txtStyle}>{label}</Text>
        </TouchableOpacity>
       
  );
}

