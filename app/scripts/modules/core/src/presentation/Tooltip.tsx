import * as React from 'react';
import { OverlayTrigger, Tooltip as BSTooltip } from 'react-bootstrap';

import { Placement } from 'core/presentation';

export interface ITooltipProps {
  value?: string;
  template?: JSX.Element;
  placement?: Placement;
  delayShow?: number;
}

export class Tooltip extends React.Component<ITooltipProps> {
  public static defaultProps: Partial<ITooltipProps> = {
    placement: 'top',
    value: ''
  };

  public shouldComponentUpdate(nextProps: ITooltipProps) {
    return !!nextProps.template
      || nextProps.value !== this.props.value
      || nextProps.placement !== this.props.placement;
  }

  public render() {
    let tooltip = <BSTooltip id={this.props.value}>{this.props.value}</BSTooltip>;
    if (this.props.template) {
      tooltip = <BSTooltip id={this.props.value}>{this.props.template}</BSTooltip>;
    }

    return (
      <OverlayTrigger delayShow={this.props.delayShow} placement={this.props.placement} overlay={tooltip}>
        {this.props.children}
      </OverlayTrigger>
    );
  }
}
