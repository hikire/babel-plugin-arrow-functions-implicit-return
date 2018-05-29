export default ({ types: t }) => {
    const blockToOneReturn = path => {
        const { body, directives } = path.node;

        if (body.length) {
            path.replaceExpressionWithStatements(body);
        } else if (body.length === 0 && directives.length) {
            path.replaceWith(
                t.blockStatement([
                    t.returnStatement(
                        t.valueToNode(directives.pop().value.value)
                    )
                ])
            );
        } else {
            path.replaceWith(path.scope.buildUndefinedNode());
        }
    };

    return {
        visitor: {
            ArrowFunctionExpression(path) {
                if (!path.node.expression) blockToOneReturn(path.get("body"));
            }
        }
    };
};
