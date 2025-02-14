import {
	createPrefixVisitor,
	prefixCSSProperty,
} from "@internal/compiler/transforms/compile/css-handler/prefix/utils";

// https://github.com/Fyrd/caniuse/blob/main/features-json/css-boxdecorationbreak.json
export default [
	createPrefixVisitor({
		name: "box-decoration-break",
		enter(path) {
			return prefixCSSProperty({
				path,
				propertyName: "box-decoration-break",
				browserFeaturesKey: "css-boxdecorationbreak",
			});
		},
	}),
];
