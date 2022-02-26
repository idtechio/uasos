import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
	box: {
		backgroundColor: '#fff',
    marginBottom: 20,
    width: '100%',
	},
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#F5F4F4',
    borderWidth: 1,
    width: 'max-content',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10
  },
  tagDisable: {
    opacity: .2,
  },
  tagText: {
    marginLeft: 8,
    color: '#003566',
  },
  header: {
    borderBottomColor: '#F5F4F4',
    borderBottomWidth: 1,
    paddingRight: 22,
    paddingLeft: 22,
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerRight: {
    alignItems: 'flex-end'
  },
  headerRightText: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 8,
  },
  headerRightTextConent: {
    color: '#003566', 
    marginLeft: 8,
  },
  place: {
    marginLeft: 12
  },
  h1: {
    fontSize: 18,
    fontWeight: '600',
    color: '#003566',
  },
  subTitle: {
    color: '#003566',
  },
  content: {
    paddingRight: 22,
    paddingLeft: 22,
    paddingTop: 26,
    paddingBottom: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footer: {
    borderTopColor: '#F5F4F4',
    borderTopWidth: 1,
    paddingRight: 22,
    paddingLeft: 22,
    paddingTop: 16,
    paddingBottom: 16, 
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})