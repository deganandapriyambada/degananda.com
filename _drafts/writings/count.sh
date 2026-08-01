#!/bin/bash

statuses=("not-started" "in-progress" "completed")

printf "%-30s %12s %12s %12s %12s\n" "Category" "Not Started" "In Progress" "Completed" "Total"
printf "%-30s %12s %12s %12s %12s\n" "------------------------------" "------------" "------------" "------------" "------------"

for dir in */; do
    [[ "$dir" == .* ]] && continue
    [[ "$dir" == __* ]] && continue

    category="${dir%/}"
    total=0
    counts=()

    for status in "${statuses[@]}"; do
        if [[ -d "$category/$status" ]]; then
            count=$(find "$category/$status" -type f -name "*.md" | wc -l | tr -d ' ')
        else
            count=0
        fi

        counts+=("$count")
        total=$((total + count))
    done

    printf "%-30s %12d %12d %12d %12d\n" \
        "$category" \
        "${counts[0]}" \
        "${counts[1]}" \
        "${counts[2]}" \
        "$total"
done