import TestRenderer from 'react-test-renderer';
import PrimaryButton from "../../components/common/PrimaryButton";
import React from "react";

function action() {}

test('PrimaryButton default color test', () => {
    const testRender = TestRenderer.create(
        <PrimaryButton text={'Some text'} action={action} />
    );

    const tree = testRender.toTree();
    const expectedColor = '#EA4E1D';

   expect(tree.props.backgroundColor).toBe(expectedColor);
});

test('PrimaryButton props pass color test', () => {
    const backgroundColor = '#fff';
    const testRender = TestRenderer.create(
        <PrimaryButton text={'Some text'} action={action} backgroundColor={backgroundColor}/>
    );

    const tree = testRender.toTree();

    expect(tree.props.backgroundColor).toBe(backgroundColor);
});
