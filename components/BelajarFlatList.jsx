import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { DATA } from "../data"


const formatCurrency = (data) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(
    data,
  )
}

const Item = ({item}) => {

  const onSelect = () => {
    Alert.alert(JSON.stringify(item))
  }

  return (
    <TouchableOpacity onPress={() => onSelect()} style={styles.wrapper}>
      <View>
        <Text style={styles.title}>{item.nama}</Text>
        <Text>{item.nomor}</Text>
      </View>
      <View>
        <Text style={styles.price}>{formatCurrency(item.hargaJual)}</Text>
        <Text>stok in house {item.stok}</Text>
      </View>
    </TouchableOpacity>
  )
}

const BelajarFlatList = () => {
  return (
    <FlatList
      style={styles.flattList}
      data={DATA}
      nestedScrollEnabled={true}
      renderItem={({item}) => <Item item={item}/>}
      keyExtractor={item => item._id}
      ItemSeparatorComponent={<View style={styles.separator}></View>}
    />
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 20
  },
  flattList: {
    width: "100%",
    marginBottom: 50
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ff006e"
  },
  price: {
    fontSize: 16,
    textAlign: "right",
    fontWeight: "800",
    color: "#3a86ff"
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginVertical: 4
  }
})

export default BelajarFlatList;