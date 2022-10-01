/* eslint-disable react/function-component-definition */
/*
 * Copyright 2022 Harness Inc. All rights reserved.
 * Use of this source code is governed by the PolyForm Shield 1.0.0 license
 * that can be found in the licenses directory at the root of this repository, also available at
 * https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */

import { Classes, Menu, Position } from '@blueprintjs/core'
import { Color, FontVariation } from '@harness/design-system'
import { Button, Layout, Popover, Text, TagsPopover, ButtonVariation, Icon, Checkbox, Switch } from '@harness/uicore'
import { Link } from 'react-router-dom'
import type { Cell, CellValue, ColumnInstance, Renderer, Row, TableInstance } from 'react-table'
import React from 'react'
import cx from 'classnames'
import { useStrings } from 'framework/strings'
import { getReadableDateTime } from '@common/utils/dateUtils'
import { killEvent } from '@common/utils/eventUtils'
import type { FreezeSummaryResponse, UpdateFreezeStatusQueryParams } from 'services/cd-ng'
import css from './FreezeWindowList.module.scss'

export interface FreezeWindowListColumnActions {
  onRowSelectToggle: (data: { freezeWindowId: string; checked: boolean }) => void
  onToggleFreezeRow: (data: { freezeWindowId?: string; status: UpdateFreezeStatusQueryParams['status'] }) => void
  onDeleteRow: (freezeWindowId?: string) => void
  onViewFreezeRow: (freezeWindow: FreezeSummaryResponse) => void
  getViewFreezeRowLink: (freezeWindow: FreezeSummaryResponse) => string
  selectedItems: string[]
}

type CellTypeWithActions<D extends Record<string, any>, V = any> = TableInstance<D> & {
  column: ColumnInstance<D> & FreezeWindowListColumnActions
  row: Row<D>
  cell: Cell<D, V>
  value: CellValue<V>
}

type CellType = Renderer<CellTypeWithActions<FreezeSummaryResponse>>

export const FreezeNameCell: CellType = ({ row, column }) => {
  const data = row.original
  const { getString } = useStrings()

  return (
    <Layout.Vertical>
      <Layout.Horizontal
        spacing="small"
        flex={{ alignItems: 'center', justifyContent: 'start' }}
        margin={{ bottom: 'small' }}
      >
        <Link to={column.getViewFreezeRowLink(data)}>
          <Text font={{ variation: FontVariation.LEAD }} color={Color.PRIMARY_7} lineClamp={1}>
            {data.name}
          </Text>
        </Link>

        {data.description && (
          <Popover className={Classes.DARK} position={Position.LEFT}>
            <Icon name="description" width={16} height={20} />
            <Layout.Vertical spacing="medium" padding="large" style={{ maxWidth: 400 }}>
              <Text color={Color.GREY_200} font={{ variation: FontVariation.SMALL_SEMI }}>
                Description
              </Text>
              <Text color={Color.WHITE} font={{ variation: FontVariation.SMALL }}>
                {data.description}
              </Text>
            </Layout.Vertical>
          </Popover>
        )}

        {data.tags && Object.keys(data.tags || {}).length ? (
          <TagsPopover
            tags={data.tags}
            iconProps={{ size: 14, color: Color.GREY_600 }}
            popoverProps={{ className: Classes.DARK }}
            className={css.tags}
          />
        ) : null}
      </Layout.Horizontal>

      <Text color={Color.GREY_600} font="small" lineClamp={1}>
        {getString('idLabel', { id: data.identifier })}
      </Text>
    </Layout.Vertical>
  )
}

export const FreezeTimeCell: CellType = () => {
  return (
    <Layout.Vertical spacing="small">
      <Text color={Color.GREY_900} font={{ variation: FontVariation.SMALL_SEMI }} lineClamp={1}>
        Every Saturday and Sunday
      </Text>
      <Layout.Horizontal spacing="small">
        <Text color={Color.GREY_900} font={{ variation: FontVariation.SMALL }}>
          12:00 am - 12:00 pm
        </Text>
        <Text color={Color.GREY_600} font={{ variation: FontVariation.SMALL }}>
          (GMT+00:00)UTC
        </Text>
      </Layout.Horizontal>
    </Layout.Vertical>
  )
}

export const StatusCell: CellType = ({ row }) => {
  const data = row.original
  return (
    <Text
      font={{ variation: FontVariation.TINY_SEMI }}
      color={data.status === 'Enabled' ? Color.PRIMARY_7 : Color.GREY_700}
      className={cx(css.status, data.status === 'Enabled' ? css.active : css.inactive)}
    >
      {data.status}
    </Text>
  )
}

export const LastModifiedCell: CellType = ({ row }) => {
  const data = row.original
  return (
    <Text color={Color.GREY_900} font={{ size: 'small' }}>
      {getReadableDateTime(data.lastUpdatedAt)}
    </Text>
  )
}

export const MenuCell: CellType = ({ row, column }) => {
  const data = row.original

  return (
    <Layout.Horizontal style={{ justifyContent: 'flex-end' }} onClick={killEvent}>
      <Popover className={Classes.DARK} position={Position.LEFT}>
        <Button variation={ButtonVariation.ICON} icon="Options" aria-label="Freeze window menu actions" />
        <Menu style={{ backgroundColor: 'unset', minWidth: 'unset' }}>
          <Menu.Item className={css.link} text={<Link to={column.getViewFreezeRowLink(data)}>Edit</Link>} />
          <Menu.Item text="Delete" onClick={() => column.onDeleteRow(data.identifier!)} />
          {data.status === 'Disabled' ? (
            <Menu.Item
              text="Enable"
              onClick={() => column.onToggleFreezeRow({ freezeWindowId: data.identifier!, status: 'Enabled' })}
            />
          ) : (
            <Menu.Item
              text="Disable"
              onClick={() => column.onToggleFreezeRow({ freezeWindowId: data.identifier!, status: 'Disabled' })}
            />
          )}
        </Menu>
      </Popover>
    </Layout.Horizontal>
  )
}

export const RowSelectCell: CellType = ({ row, column }) => {
  const data = row.original

  return (
    <div className={css.checkbox} onClick={killEvent}>
      <Checkbox
        large
        checked={column.selectedItems.includes(data.identifier!)}
        onChange={event => {
          column.onRowSelectToggle({ freezeWindowId: data.identifier!, checked: event.currentTarget.checked })
        }}
      />
    </div>
  )
}

export const FreezeToggleCell: CellType = ({ row, column }) => {
  const data = row.original

  return (
    <div onClick={killEvent}>
      <Switch
        large
        checked={data.status === 'Enabled'}
        labelElement=""
        onChange={event =>
          column.onToggleFreezeRow({
            freezeWindowId: data.identifier!,
            status: event.currentTarget.checked ? 'Enabled' : 'Disabled'
          })
        }
      />
    </div>
  )
}
