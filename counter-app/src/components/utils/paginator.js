import _ from "lodash";

export function Paginator(items, PageNumber, PageSize) {
  const StartIndex = (PageNumber - 1) * PageSize;
  return _(items)
    .slice(StartIndex)
    .take(PageSize)
    .value();
}
