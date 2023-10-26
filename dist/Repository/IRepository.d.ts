export interface IRepository<T> {
    Find(id: string): T;
    Insert(entity: T): void;
    Update(entity: T): void;
    Delete(entity: T): void;
    Save(): void;
}
