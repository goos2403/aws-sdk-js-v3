import {
  _DimensionValues,
  _UnmarshalledDimensionValues
} from "./_DimensionValues";
import { _TagValues, _UnmarshalledTagValues } from "./_TagValues";

/**
 * <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimentions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note>
 */
export interface _Expression {
  /**
   * <p>Return results that match either <code>Dimension</code> object.</p>
   */
  Or?: Array<_Expression> | Iterable<_Expression>;

  /**
   * <p>Return results that match both <code>Dimension</code> objects.</p>
   */
  And?: Array<_Expression> | Iterable<_Expression>;

  /**
   * <p>Return results that don't match a <code>Dimension</code> object.</p>
   */
  Not?: _Expression;

  /**
   * <p>The specific <code>Dimension</code> to use for <code>Expression</code>.</p>
   */
  Dimensions?: _DimensionValues;

  /**
   * <p>The specific <code>Tag</code> to use for <code>Expression</code>.</p>
   */
  Tags?: _TagValues;
}

export interface _UnmarshalledExpression extends _Expression {
  /**
   * <p>Return results that match either <code>Dimension</code> object.</p>
   */
  Or?: Array<_UnmarshalledExpression>;

  /**
   * <p>Return results that match both <code>Dimension</code> objects.</p>
   */
  And?: Array<_UnmarshalledExpression>;

  /**
   * <p>Return results that don't match a <code>Dimension</code> object.</p>
   */
  Not?: _UnmarshalledExpression;

  /**
   * <p>The specific <code>Dimension</code> to use for <code>Expression</code>.</p>
   */
  Dimensions?: _UnmarshalledDimensionValues;

  /**
   * <p>The specific <code>Tag</code> to use for <code>Expression</code>.</p>
   */
  Tags?: _UnmarshalledTagValues;
}
