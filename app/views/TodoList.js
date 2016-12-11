import React from 'react';
import {Actions} from 'react-native-router-flux'

import {
  ListView,
	TouchableHighlight,
	Image,
  View,
  Text 
} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({dataSource}) => {
  return(
    <View
      style={{flex: 1, marginTop:40, marginLeft:30, marginRight: 30}}
    >
			<View style={{flex:1}}>
        <TouchableHighlight
					style={{flex:1, alignSelf:'flex-end'}}
          onPress={() => Actions.menu()}
        >
			  	<Image style={{height:30, resizeMode:'contain'}} source={{uri: icon}}/>
        </TouchableHighlight>
			</View>
      <View style={{flex:10}}>
        <ListView
          style={{flex:10}}
          dataSource={dataSource}
          renderRow={(data) => <TodoItem data={data}/>}
        />
			</View>
    </View>
  );
};

export default TodoList;
var icon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4Xu3da8yuVXkn8H9RNB0EQRkNRtrxAKJ0IjNqBmqtn8zE9sNgQStKwtTWQydjhSJ1iPEQJB2VkzNmmoo6rfWQIoj1A/p9DChtFZPpsANoxIgVjAQVMYpBJivz7Mx262bv9933uu9rPffvSQyJvO+1rvW7Fnn+73O471+JBwECBAgQILA6gV9Z3Y5tmAABAgQIEIgA4BAQIECAAIEVCggAKxy6LRMgQIAAAQHAGSBAgAABAisUEABWOHRbJkCAAAECAoAzQIAAAQIEViggAKxw6LZMgAABAgQEAGeAAAECBAisUEAAWOHQbZkAAQIECAgAzgABAgQIEFihgACwwqHbMgECBAgQEACcAQIECBAgsEIBAWCFQ7dlAgQIECAgADgDBAgQIEBghQICwAqHbssECBAgQEAAcAYIECBAgMAKBQSAFQ7dlgkQIECAgADgDBAgQIAAgRUKCAArHLotEyBAgAABAcAZIECAAAECKxQQAFY4dFsmQIAAAQICgDNAgAABAgRWKCAArHDotkyAAAECBAQAZ4AAAQIECKxQQABY4dBtmQABAgQICADOAAECBAgQWKGAALDCodsyAQIECBAQAJwBAgQIECCwQgEBYIVDt2UCBAgQICAAOAMECBAgQGCFAgLACoduywQIECBAQABwBggQIECAwAoFBIAVDt2WCRAgQICAAOAMECBAgACBFQoIACscui0TIECAAAEBwBkgQIAAAQIrFBAAVjh0WyZAgAABAgKAM0CAAAECBFYoIACscOi2TIAAAQIEBABngAABAgQIrFBAAFjh0G2ZAAECBAgIAM4AAQIECBBYoYAAsMKh2zIBAgQIEBAAnAECBAgQILBCAQFghUO3ZQIECBAgIAA4AwQIECBAYIUCAsAKh27LBAgQIEBAAHAGCBAgQIDACgUEgBUO3ZYJECBAgIAA4AwQIECAAIEVCggAKxy6LRMgQIAAAQHAGSBAgAABAisUEABWOHRbJkCAAAECAoAzQIAAAQIEViggAKxw6LZMgAABAgQEAGeAAAECBAisUEAAWOHQbZkAAQIECAgAzgABAgQIEFihgACwwqHbMgECBAgQEACcAQIECBAgsEIBAWCFQ7dlAgQIECAgADgDBAgQIEBghQICwAqHbssE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ZUejMQIECBAg0E9AAOhnqzIBAgQIECgrIACUHY3GCBAgQIBAPwEBoJ+tygQIECBAoKyAAFB2NBojQIAAAQL9BASAfrYqEyBAgACBsgICQNnRaIwAAQIECPQTEAD62apMgAABAgTKCggAZUejMQIECBAg0E9AAOhnqzIBAgQIECgrIACUHY3GCBAgQIBAPwEBoJ+tygQIECBAoKyAAFB2NBojQIAAAQL9BASAfrYqEyBAgACBsgICQNnRaIwAAQIECPQTEAD62apMgAABAgTKCggAZUejMQIECBAg0E9AAOhnqzIBAgQIECgrIACUHY3GCBAgQIBAPwEBoJ+tygQIECBAoKyAAFB2NBojQIAAAQL9BASAfrYqEyBAgACBsgICQNnRaIwAAQIECPQTEAD62apMgAABAgTKCggAZUejMQIECBAg0E9AAOhnqzIBAgQIECgrIACUHY3GCBAgQIBAPwEBoJ+tygQIECBAoKyAAFB2NBojQIAAAQL9BASAfrYqEyBAgACBsgICQNnRaIwAAQIECPQTEAD62apMgAABAgTKCggAZUejMQIECBAg0E9AAOhnqzIBAgQIECgrIACUHY3GCBAgQIBAPwEBoJ+tygQIECBAoKyAAFB2NBojQIAAAQL9BASAfrYqEyBAgACBsgICQNnRaIwAAQIECPQTEAD62apMgAABAgTKCggAZUejMQIECBAg0E9AAOhnqzIBAgQIECgrIACUHY3GCBAgQIBAPwEBoJ+tygQIECBAoKyAAFB2NBojQIAAAQL9BASAfrYqEyBAgACBsgICQNnRaIwAAQIECPQTEAD62apMgAABAgTKCggAZUejMQIECBAg0E9AAOhnqzIBAgQIECgrIACUHY3GCBAgQIBAPwEBoJ+tygQIECBAoKyAAFB2NBojQIAAAQL9BASAfrYqEyBAgACBsgICQNnRaIwAAQIECPQTEAD62apMgAABAgTKCggAZUejMQIECBAg0E9AAOhnqzIBAgQIECgrIACUHY3GCBAgQIBAPwEBoJ+tygQIECBAoKyAAFB2NBojQIAAAQL9BASAfrYqEyBAgACBsgICQNnRaIwAAQIECPQTEAD62apMgAABAgTKCggAZUejMQIECBAg0E9AAOhnqzIBAgQIECgrIACUHY3GCBAgQIBAPwEBoJ+tygQIECBAoKyAAFB2NBojQIAAAQL9BASAfrYqEyBAgACBsgICQNnRaIwAAQIECPQTEAD62apMgAABAgTKCvxfug8bHzovkiQAAAAASUVORK5CYII='
