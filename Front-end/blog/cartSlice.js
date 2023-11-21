const cartSlice = createSlice({
	name: "cart",
	initialState: { item: [], totalQuantity: 0, cartChange: false },
	reducers: {
		addCartItem: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.item.find((item) => item.id === newItem.id);
			if (!existingItem) {
				state.item.push({
					id: newItem.id,
					title: newItem.title,
					description: newItem.description,
					quantity: 1,
				});
			} else {
				existingItem.quantity++;
			}
			state.totalQuantity++;
			state.cartChange = true;
		},
        removeCartItem: (state, action) => {
			const currentItem = action.payload;
			const targetItem = state.item.find((item) => item.id === currentItem.id);
			if (targetItem.quantity === 1) {
				targetItem.quantity--;
				state.item = state.item.filter((item) => item.quantity !== 0);
			}
			state.totalQuantity--;
			targetItem.quantity--;
			state.cartChange = true;
		},
	},
});

const uiSlice = createSlice({
	name: "UI",
	initialState: { show: false, notification: null },
	reducers: {
		toggle(state) {
			state.show = !state.show;
		},
	},
});
export const uiActions = uiSlice.actions;
export const cartActions = cartSlice.actions;

export default {uiSlice, cartSlice};
